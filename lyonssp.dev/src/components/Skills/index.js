import { ChartHeader, SkillsContainer, SkillsWrapper, } from './SkillsElements'
import {ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar} from 'recharts'

const Skills = () => {
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

  return (
    <>
        <SkillsContainer id="skills">
          {charts.map(chart => {
            return <SkillsWrapper>
              <ChartHeader>{chart.title}</ChartHeader>
              <ResponsiveContainer height={256} width={340}>
                <RadarChart outerRadius={90} data={chart.data}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <Radar dataKey="A" stroke={chart.stroke} fill={chart.fill} fillOpacity={0.6} />
                </RadarChart>
              </ResponsiveContainer>
            </SkillsWrapper>
          })}
        </SkillsContainer>
    </>
  )
}

export default Skills
