const express = require('express');
const router = express.Router();
const FAQs = require("./../data/faqs");
const team = require("./../data/team");
const schedule = require("./../data/schedule");

const homePageLinks = [
	{
		href: "#about",
		title: "About"
	}, /*{
		href: "#schedule",
		title: "Schedule"
	},*/ {
		href: "#sponsors",
		title: "Sponsors"
	}, {
		href: "#faqs",
		title: "FAQs"
	}, {
		href: "https://blog.hackonload.com/",
		title: "Blog",
		newWindow: true,
		external: true
	}
];

const teamPageLinks = [
	{
		href: "/",
		title: "home"
	},
	{
		href: "/#about",
		title: "About"
	},
	{
		href: "/#sponsors",
		title: "Sponsors"
	},
	{
		href: "/#faqs",
		title: "FAQs"
	},
	{
		href: "https://blog.hackonload.com/",
		title: "Blog",
		newWindow: true,
		external: true
	}
];

/* GET home page. */
router.get('/', (req, res, next) => {
	const url = "https://hackonload.com" + req.originalUrl;
	const data = {
		title: 'OnLoad 2.0 | 28th Feb - 1st March',
		meta_description: 'A 36hrs intense, fun-filled, rewarding convergence of programmers, designers and developers to build something amazing.',
		page_url: url,
		FAQs: FAQs,
		links: homePageLinks,
		schedule: schedule
	};
	res.render('index', data);
});

router.get('/team', (req, res) => {
	const url = "https://hackonload.com" + req.originalUrl;
	const data = {
		title: 'Team behind OnLoad 2.0',
		meta_description: 'The team behind OnLoad 2.0',
		page_url: url,
		links: teamPageLinks,
		team: team
	};
	res.render('team', data);
});

router.get('/campus-ambassador', (req, res) => {
	res.render('campus-ambassador-form', {layout: false});
});

router.get('/cfp', (req, res) => {
	res.render('cfp-form', {layout: false});
});

router.get('/ticket', (req, res) => {
	const url = "https://hackonload.com" + req.originalUrl;
	const data = {
		title: 'OnLoad 2.0 conference tickets',
		meta_description: 'Book tickets for the talks & Workshops for OnLoad 2.0',
		page_url: url,
		links: teamPageLinks,
	};
	res.render('ticket', data);
});

router.get('/ticket/confirm', (req, res) => {
	const url = "https://hackonload.com" + req.originalUrl;
	const data = {
		title: 'OnLoad 2.0 conference tickets',
		meta_description: 'Book tickets for the talks & Workshops for OnLoad 2.0',
		page_url: url,
		links: teamPageLinks,
	};
	res.render('ticket-confirm', data);
});

module.exports = router;
