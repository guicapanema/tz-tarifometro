'use strict';

var moment = require('moment');

var CountUp = require('countup.js');

var now = moment();
var yearBegin = moment().startOf('year');
var yearEnd = moment().endOf('year');

var secondsToYearEnd = yearEnd.diff(now, 'seconds');
var secondsSinceYearBegin = now.diff(yearBegin, 'seconds');
var secondsYearTotal = yearEnd.diff(yearBegin, 'seconds');

var daysSinceYearBegin = now.diff(yearBegin, 'days');

var busRevenueTotal = 1036944342.91;

var busRevenueToNow = busRevenueTotal * secondsSinceYearBegin / secondsYearTotal;

var options = {
	useEasing: false,
	useGrouping: true,
	separator: '.',
	decimal: ','
};

var demo = new CountUp('contador', busRevenueToNow, busRevenueTotal, 0, secondsToYearEnd, options);
if (!demo.error) {
	demo.start();
} else {
	console.error(demo.error);
}