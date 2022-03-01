import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts'

const Hero = () => {
    return (
        <Grid container spacing={2} sx={{ position: 'relative', height: '100vh', width: '100vw' }}>
            <Grid item xs={12}>
                <div>
                    <Title>Sean Lyons</Title>
                    <Subtitle>Modern Software Developer</Subtitle>
                </div>
            </Grid>
            {charts.map(chart => {
                return <Grid key={chart.title} item xs={12} md={4}>
                    <ResponsiveContainer aspect={1.75}>
                        <RadarChart data={chart.data}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" tick={{ fill: 'white' }} />
                            <Radar dataKey="A" stroke={chart.stroke} fill={chart.fill} fillOpacity={0.6} />
                        </RadarChart>
                    </ResponsiveContainer>
                </Grid>
            })}
        </Grid>
    )
}

const Title = styled('h1')(({ theme }) => ({
    margin: 0,
    paddingLeft: 25,
    paddingTop: 25,
    fontSize: '100px',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat,sans-serif',
    fontWeight: 800,
}));

const Subtitle = styled('p')(({ theme }) => ({
    margin: 0,
    paddingLeft: 25,
    fontSize: '32px',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat,sans-serif',
    fontWeight: 500,
    overflow: 'hidden',
    borderRight: `.15em solid white`,
    whiteSpace: 'nowrap',
    animation: 'typing 2s steps(20, end) forwards, blink 1s infinite',
    fontSize: '1.6rem',
    width: 0,
    maxWidth: '32%', // TODO
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
const charts = [
    {
        title: 'Language Proficiency',
        stroke: '#6F4D8F',
        fill: '#8964AB',
        data: lang,
    },
    {
        title: 'Operational Expertise',
        stroke: '#5F7FA0',
        fill: '#7F98B3',
        data: ops,
    },
    {
        title: 'Job Experience',
        stroke: '#56A99E',
        fill: '#78BAB2',
        data: experience,
    }
]
/* end radar chart configs */

export default Hero;
