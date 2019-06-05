import React from 'react';

//-- Components --//
import Plx from 'react-plx';

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';
// import mediaQueryFor from '../styles/MediaQueries';

//-- Assets --//

const StyledPortfolio = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 100vw;
	min-height: 100vh;
	background: ${colors.textOnFG};
	border-top: 10px solid ${colors.active};
	padding-top: 40px;
	padding-bottom: 40px;

	font-size: 4rem;
	line-height: 6.5rem;
`;

const StyledIntro = styled.div`
	font-size: 1.6rem;
	line-height: 2.6rem;
	display: inline;
	position: relative;
	white-space: pre-wrap;
	max-width: 850px;
	padding-left: 200px;
	/* border: 1px solid red; */
`;

const Bold = styled.span`
	line-height: 8rem;
	font-size: 4rem;
`;

const Medium = styled.span`
	font-size: 2.1rem;
`;

const Sidewaze = styled.div`
	position: absolute;
	transform: rotate(-90deg);
	white-space: nowrap;
	font-size: 8rem;
	right: 68%;
	bottom: 2vh;
	font-weight: bold;
`;

const movingName = [
	{
		start: '#SB-Prl',
		startOffset: '0vh',
		end: 'self',
		endOffset: '50vh',
		properties: [
			{
				startValue: 50,
				endValue: 0,
				property: 'translateY',
				unit: 'vh'
			}
		]
	},
	{
		start: 'self',
		startOffset: '50vh',
		end: 'self',
		endOffset: '150vh',
		properties: [
			{
				startValue: 0,
				endValue: -50,
				property: 'translateY',
				unit: 'vh'
			}
		]
	}
];

const Portfolio = () => {
	return (
		<StyledPortfolio id='SB-Prl'>
			<StyledIntro>
				<Bold>
					Objective Mission and Passion <br />
				</Bold>{' '}
				<Medium>
					Lead creative and technical teams to deliver their best work
					on time.{' '}
				</Medium>{' '}
				<br /> <br />
				<Bold>
					Skills <br />
				</Bold>
				Refactoring | Documentation | Business logic | Team Management |
				Project Management | Communication | Design | Architecture{' '}
				<br /> <br />
				<Bold>
					Stack <br />
				</Bold>
				HTML | CSS | JavaScript | Animation | React | Python | C |
				Styled - Components | MUI | Responsive Design | UI / UX | Redux
				| Node | GraphQL | Apollo | Prisma | Gatsby | RDBMS | SQL | JWT
				| RESTful API | Git <br /> <br />
				<Plx
					style={{'z-index': '10'}}
					parallaxData={movingName}
					animateWhenNotInViewport={true}>
					<Sidewaze> Stephen Bondor </Sidewaze>
				</Plx>
				<Bold>
					Projects <br />
				</Bold>
				<Medium>
					Arc: ({' '}
					<a
						href='https://www.youtube.com/watch?v=XI_-0z4J-n4'
						target='_blank'
						rel='noopener noreferrer'>
						Intro
					</a>{' '}
					|{' '}
					<a
						href='https://arq.community'
						target='_blank'
						rel='noopener noreferrer'>
						Refactored Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://sveza.app'
						target='_blank'
						rel='noopener noreferrer'>
						Original Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/Lambda-School-Labs/labs-team-home'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)<br />
				</Medium>
				{'	'}Refactoring, GraphQL, Apollo, React, MUI, Styled-Components,
				MongoDB
				<br />
				<Medium>
					Refugee Stories (Back-End Only): ({' '}
					<a
						href='https://github.com/team-awesome-s-refugee-stories/backend'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)
					<br />
				</Medium>{' '}
				{'	'}Documentation, RESTful API, Node, OAuth, JWT, MySQL, Knex{' '}
				<br />
				<Medium>
					Meme Battler (Back-End Only): ({' '}
					<a
						href='https://us1.prisma.sh/bondor-e1702b/meme-battle-api/dev?headers={"Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTkxNjYzMzQsIm5iZiI6MTU1OTE2NjMzNCwiZXhwIjoxNTU5MjUyNzM0fQ.jAziDYWva-QbfG6pdaQAoCUSpp6uljIzcPDz7nOsaVU"}'
						target='_blank'
						rel='noopener noreferrer'>
						gqlPlayground
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/meme-battles/mb_backend'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)
					<br />
				</Medium>{' '}
				{'	'}GraphQL, Prisma, Yoga, Auth, JWT <br />
				<Medium>
					HPO (Front-End Only): ({' '}
					<a
						href='https://elated-euclid-d0d69d.netlify.com'
						target='_blank'
						rel='noopener noreferrer'>
						Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/StephenBondor/hpo-podcast'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)<br />
				</Medium>{' '}
				{'	'}React, Redux, Styled-Components <br />
				<Medium>
					Portfolio (Front-End only): ({' '}
					<a href='#page' target='_blank' rel='noopener noreferrer'>
						Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/StephenBondor/portfolio'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)<br />
				</Medium>{' '}
				{'	'}React, Styled-Components, Recursion, Pure-CSS animation,
				React-PLX <br />
				<Medium>
					Blog (Front-End only): ({' '}
					<a
						href='https://stephenbondor.netlify.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/StephenBondor/blog'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)<br />
				</Medium>{' '}
				{'	'}React, Styled-Components, Recursion <br />
				<br />
			</StyledIntro>
		</StyledPortfolio>
	);
};

export default Portfolio;
