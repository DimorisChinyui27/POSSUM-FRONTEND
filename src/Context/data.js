const questionList = [
	{
		questionId: "adsadasd",
		id: "7",
		userName: "@fashionIconCosta",
		firstName: "Alex",
		lastName: "Costa",
		url: "/costa.jpg",
		post: "Why has the crptocurrency market crashed so much after all the hype last week?",
		totalAnswered: 2,
		sameQuestion: 200,
		date: "Aug 28",
		totalVotes: ["0", "1", "2", "3", "4"],
		bounty: 30,
		answers: [
			{
				answeredBy: {
					username: "Mac Ovens",
					id: "12-345",
					url: "/robert-downey-jr.jpeg",
					domain: "Software Engineer at Google",
				},
				answerType: "text",
				answerValue: {
					text: "It is due to the the investors who sold the crypto and took their cash out which made crypto to depriciate.",
					image: [],
					video: [],
				},
				answeredDate: "3rd Oct, 2022",
				answerVotes: ["0", "1"],
				gifts: [],
				// gifts: [
				// 	{
				// 		gitedBy: "1",
				// 		giftAmount:23
				// 	},
				// ],
			},
			{
				answeredBy: {
					username: "Ronald Ethan",
					id: "12-345",
					url: "/butler.jpg",
					domain: "Software Engineer at Facebook",
				},
				answerType: "text",
				answerValue: {
					text: "Maybe due to Elon :)",
					image: [],
					video: [],
				},
				answeredDate: "4rth Oct, 2022",
				answerVotes: ["3", "1"],
				gifts: [],
			},
		],
		gifts: [],
		closed: false,
		targetAudience: "Software Engineers",
	},
	{
		questionId: "adsadasda",
		id: "32",
		// username: "Allen O'Daniel",
		firstName: "Allen",
		lastName: "O'Daniel",
		userName: "@Allenoure",
		url: "/profilePic.jpg",
		post: "Are we living in a simulation?",
		totalAnswered: 0,
		sameQuestion: 200,
		date: "Aug 28",
		totalVotes: ["0", "1", "4"],
		bounty: 70,
		answers: [],
		gifts: [
			{
				giftedBy: "7",
				giftAmount: 23,
			},
		],
		closed: false,
		targetAudience: "Software Engineers",
	},
	{
		questionId: "adsada3",
		id: "26",
		firstName: "Arthur",
		lastName: "Mark",
		userName: "@ArkMark_12",
		// username: "Arthur",
		url: "/entrepreneur.jpg",
		post: "How Do I get more clients for my business?",
		totalAnswered: 3,
		sameQuestion: 200,
		date: "Aug 28",
		totalVotes: ["3", "4"],
		bounty: 600,
		answers: [
			{
				answeredBy: {
					username: "Chris",
					id: "12-345",
					url: "/arthur.png",
					domain: "QA at Systems",
				},
				answerType: "text",
				answerValue: {
					text: "Start advertising on social media platform",
					image: [],
					video: [],
				},
				answeredDate: "3rd Oct, 2022",
				answerVotes: ["3", "2", "4"],
				gifts: [],
			},
			{
				answeredBy: {
					username: "Ruben",
					id: "12-345",
					url: "/chris.jpg",
					domain: "Entrepreneur",
				},
				answerType: "text",
				answerValue: {
					text: "Invest in Sales team and use social media to reach out to clients",
					image: [],
					video: [],
				},

				answeredDate: "4rth Oct, 2022",
				answerVotes: ["1", "2", "5"],
				gifts: [],
			},
		],
		gifts: [],
		closed: false,
		targetAudience: "Social Media Engineers",
	},
];
const activeUser = {
	id: "7",
	userName: "@fashionIconCosta",
	firstName: "Alex",
	lastName: "Costa",
	url: "/costa.jpg",
	crowns: 765,

	domain: "Fashion Influencer",
	description:
		"Men's Fashion | Grooming | Lifestyle Founder @forteseries @apricusskincare @aetosapparel",
	subDescription: "3.7M YouTube | 1.4M TikTok",
	totalAnswered: "200",
	totalAsked: "73",
	totalCrowns: "267",
	interestedTopics: ["Lifestyle", "Grooming", "Men's Fashion"],
};

const topics = [
	{
		value: "Trending",
	},
	{
		value: "Deutschland",
	},
	{
		value: "Memes",
	},
	{
		value: "Wortwitze",
	},
	{
		value: "Lustig!",
	},
	{
		value: "Interessant!",
	},
	{
		value: "Gaming",
	},
	{
		value: "Konsolen",
	},
	{
		value: "Spiele",
	},
	{
		value: "Beliebte Spiele",
	},
	{
		value: "Entertainment",
	},
	{
		value: "Filme",
	},
	{
		value: "TV",
	},
	{
		value: "Sendungen & Serien",
	},
	{
		value: "Fan Theorien",
	},
	{
		value: "Musik",
	},
	{
		value: "Podcasts",
	},
	{
		value: "Youtube",
	},
	{
		value: "Beziehungen",
	},
];
const questionModalState = false;
export { questionList, activeUser, topics, questionModalState };
