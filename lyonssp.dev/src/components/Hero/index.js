import Grid from '@mui/material/Grid'
import {styled, useTheme} from '@mui/material/styles';
import {Button} from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar} from 'recharts'

const Hero = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <HeroWrapper>
            <Grid container spacing={isSmall ? 0 : 2}>
                <Grid item xs={12}>
                    <ProfileWrapper>
                        <Title>Sean Lyons</Title>
                        {/* need outer div around subtitle to enforce proper width for blink animation */}
                        <div><Subtitle>Modern Software Developer</Subtitle></div>
                        <Links>
                            <Link
                                href="https://github.com/lyonssp"
                                target="_blank"
                                startIcon={<GitHubIcon/>}
                            >
                                GitHub
                            </Link>
                            <Link
                                href="https://www.linkedin.com/in/lyonssp"
                                target="_blank"
                                startIcon={<LinkedInIcon/>}
                            >
                                LinkedIn
                            </Link>
                            <Link
                                href="https://github.com/lyonssp/resume/blob/master/resume.pdf"
                                target="_blank"
                                startIcon={<HistoryEduIcon/>}
                            >
                                Resume
                            </Link>
                        </Links>
                    </ProfileWrapper>
                </Grid>
            </Grid>
            <ChartWrapper>
                <Grid container>
                    {charts(theme).map(chart => {
                        return <Grid key={chart.title} item xs={12} md={4} margin="20px 0">
                            <ResponsiveContainer aspect={1.75}>
                                <RadarChart data={chart.data}>
                                    <PolarGrid/>
                                    <PolarAngleAxis dataKey="subject" tick={{fill: theme.palette.text.secondary}}/>
                                    <Radar dataKey="A" stroke={chart.stroke} fill={chart.fill} fillOpacity={0.6}/>
                                </RadarChart>
                            </ResponsiveContainer>
                        </Grid>
                    })}
                </Grid>
            </ChartWrapper>
        </HeroWrapper>
    )
}

const HeroWrapper = styled('div')(() => ({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
}))

const ProfileWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20,
}))

const Title = styled('h1')(({theme}) => ({
    margin: 0,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    [theme.breakpoints.up('xs')]: {
        fontSize: '32px',
    }
}));

const Subtitle = styled('p')(({theme}) => ({
    margin: 0,
    paddingRight: 5,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    overflow: 'hidden',
    borderRight: `.15em solid white`,
    whiteSpace: 'nowrap',
    animation: 'typing 2s steps(20, end) forwards, blink 1s infinite',
    [theme.breakpoints.up('xs')]: {
        fontSize: '16px',
    }
}))

const Links = styled('div')(() => ({
    margin: 0,
    padding: 0,
}))

const Link = styled(Button)(({theme}) => ({
    color: theme.palette.text.secondary
}))

const ChartWrapper = styled('div')(() => ({
    width: '100%',
    margin: 0,
    padding: 0,
}))

/* radar chart data */
const lang = [
    {
        "subject": "Golang",
        "A": 95,
        "fullMark": 100
    },
    {
        "subject": "Scala",
        "A": 50,
        "fullMark": 100
    },
    {
        "subject": "Python",
        "A": 70,
        "fullMark": 100
    },
    {
        "subject": "Clojure",
        "A": 50,
        "fullMark": 100
    },
    {
        "subject": "Typescript",
        "A": 75,
        "fullMark": 100
    },
    {
        "subject": "Java",
        "A": 80,
        "fullMark": 100
    },
]

const ops = [
    {
        "subject": "Monitoring",
        "A": 85,
        "fullMark": 100
    },
    {
        "subject": "Containers",
        "A": 80,
        "fullMark": 100
    },
    {
        "subject": "Scalability",
        "A": 85,
        "fullMark": 100
    },
    {
        "subject": "Infra as Code",
        "A": 70,
        "fullMark": 100
    },
    {
        "subject": "CI/CD",
        "A": 90,
        "fullMark": 100
    },
]

const experience = [
    {
        "subject": "SRE",
        "A": 75,
        "fullMark": 100
    },
    {
        "subject": "Frontend",
        "A": 50,
        "fullMark": 100
    },
    {
        "subject": "Backend",
        "A": 90,
        "fullMark": 100
    },
    {
        "subject": "Architect",
        "A": 85,
        "fullMark": 100
    },
    {
        "subject": "Systems",
        "A": 75,
        "fullMark": 100
    },
]
/* end radar chart data */

/* radar chart configs */
const charts = (theme) => ([
    {
        title: 'Language Proficiency',
        stroke: theme.palette.primary.main,
        fill: theme.palette.primary.main,
        data: lang,
    },
    {
        title: 'Operational Expertise',
        stroke: theme.palette.primary.main,
        fill: theme.palette.primary.main,
        data: ops,
    },
    {
        title: 'Job Experience',
        stroke: theme.palette.primary.main,
        fill: theme.palette.primary.main,
        data: experience,
    }
])

/* end radar chart configs */

export default Hero;
