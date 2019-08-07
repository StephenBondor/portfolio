import React from 'react';

//-- Components --//
import ParallaxName from './ParallaxName';

//-- Styles --//
import styled from 'styled-components';
import {colors} from '../styles/Colors';

//-- Assets --//
const StyledPortfolio = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	min-height: 100vh;
	border-top: 10px solid ${colors.active};
	padding-top: 40px;
	padding-bottom: 60px;
	background: ${colors.textOnFG};
	font-size: 4rem;
	line-height: 6.5rem;

	@media (max-width: 500px) {
		padding-bottom: 150px;
	}
`;

const StyledIntro = styled.div`
	display: inline;
	max-width: 800px;
	padding: 0 40px;
	white-space: pre-wrap;
	font-size: 1.6rem;
	line-height: 2.6rem;
`;

const Bold = styled.div`
	line-height: 8rem;
	font-size: 4rem;
`;

const Medium = styled.div`
	font-size: 2.1rem;

	@media (max-width: 460px) {
		margin: 20px 0;
	}
`;

const Detail = styled.div`
	padding-left: 40px;
`;


const Portfolio = () => {
	return (
		<StyledPortfolio id='SB-Prl'>
			<ParallaxName />
			<StyledIntro>
				<Bold>Objective Mission and Passion</Bold>
				<Medium>
					Lead creative and technical teams to deliver their best work
					on time.
				</Medium>
				<Bold>Skills</Bold>
				<Detail>
					Refactoring | Documentation | Business logic | Team
					Management | Project Management | Communication | Design |
					Architecture
				</Detail>
				<Bold>Stack</Bold>
				<Detail>
					HTML | CSS | JavaScript | Animation | React | Python | C |
					Styled - Components | MUI | Responsive Design | UI / UX |
					Redux | Node | GraphQL | Apollo | Prisma | Gatsby | RDBMS |
					SQL | JWT | RESTful API | Git{' '}
				</Detail>

				<Bold>Projects</Bold>
				<Medium>
					Arc [Front End Developer]: ({' '}
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
					)
				</Medium>
				<Detail>
					Refactoring, GraphQL, Apollo, React, MUI, Styled-Components,
					MongoDB
				</Detail>
				<Medium>
					Refugee Stories [Back-End Developer]: ({' '}
					<a
						href='https://github.com/team-awesome-s-refugee-stories/backend'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)
				</Medium>
				<Detail>
					Documentation, RESTful API, Node, OAuth, JWT, MySQL, Knex
				</Detail>
				<Medium>
					Meme Battler [Back-End Developer]: ({' '}
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
				</Medium>
				<Detail>GraphQL, Prisma, Yoga, Auth, JWT </Detail>
				<Medium>
					HPO [Front-End Developer]: ({' '}
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
					)
				</Medium>
				<Detail>React, Redux, Styled-Components </Detail>
				<Medium>
					Portfolio [Front-End Developer]: ({' '}
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
					)
				</Medium>
				<Detail>
					React, Styled-Components, Recursion, Pure-CSS animation,
					React-PLX
				</Detail>
				<Medium>
					Blog [Front-End Developer]: ({' '}
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
					)
				</Medium>
				<Detail>React, Styled-Components, Gatsby, GraphQL</Detail>
				<Medium>
					Conway's Game of Life [Front-End Developer]: ({' '}
					<a
						href='https://jovial-shannon-5d8778.netlify.com/?cellcount=1100&delay=1200'
						target='_blank'
						rel='noopener noreferrer'>
						Deploy
					</a>{' '}
					|{' '}
					<a
						href='https://github.com/StephenBondor/game-of-life'
						target='_blank'
						rel='noopener noreferrer'>
						Github
					</a>{' '}
					)
				</Medium>
				<Detail>React, Styled-Components, Canvas, Parser</Detail>
			</StyledIntro>
		</StyledPortfolio>
	);
};

export default Portfolio;
