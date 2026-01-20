import Grid from '@mui/material/Grid'
import {styled, useTheme} from '@mui/material/styles';
import Button from '@mui/material/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import {
    ResponsiveContainer,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    Radar
} from 'recharts'
import { personalInfo, links, getCharts } from '../../data/portfolio'

const Hero = () => {
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <HeroWrapper>
            <Grid container spacing={isSmall ? 0 : 2}>
                <Grid item xs={12}>
                    <ProfileWrapper>
                        <Title>{personalInfo.name}</Title>
                        {/* need outer div around subtitle to enforce proper width for blink animation */}
                        <div><Subtitle>{personalInfo.title}</Subtitle></div>
                        <Links>
                            <Link
                                href={links.github.url}
                                target="_blank"
                                startIcon={<GitHubIcon/>}
                            >
                                {links.github.label}
                            </Link>
                            <Link
                                href={links.linkedin.url}
                                target="_blank"
                                startIcon={<LinkedInIcon/>}
                            >
                                {links.linkedin.label}
                            </Link>
                            <Link
                                href={links.resume.url}
                                target="_blank"
                                startIcon={<HistoryEduIcon/>}
                            >
                                {links.resume.label}
                            </Link>
                        </Links>
                    </ProfileWrapper>
                </Grid>
            </Grid>
            <ChartWrapper>
                <Grid container>
                    {getCharts(theme).map(chart => {
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

export default Hero;
