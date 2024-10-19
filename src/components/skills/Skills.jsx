import SkillCard from './skillCard';

import HTML from '../../assets/skills/programming/html.png';
import CSS from '../../assets/skills/programming/css.png';
import JavaScript from '../../assets/skills/programming/javascript.png';
import React from '../../assets/skills/programming/react.png';
import GitHub from '../../assets/skills/devops/github.png';
import Tailwind from '../../assets/skills/programming/tailwind.png';
import Jira from '../../assets/skills/useful-skills/jira.png';
import Vue from '../../assets/skills/programming/vue.png';
import TypeScript from '../../assets/skills/programming/typescript.png';
import Trello from '../../assets/skills/useful-skills/trello.png';
import Playwright from '../../assets/skills/automatization/playwright.webp';
import Clickup from '../../assets/skills/useful-skills/clickup.webp';
import Jenkins from '../../assets/skills/devops/jenkins.png';
import Gitlab from '../../assets/skills/devops/gitlab.png';
import Docker from '../../assets/skills/devops/docker.png';
import K8s from '../../assets/skills/devops/k8s.png';
import MongoDb from '../../assets/skills/programming/mongo.png';
import PostgreSql from '../../assets/skills/programming/postgresql.png';
import Node from '../../assets/skills/programming/node.png';
import Express from '../../assets/skills/programming/express.png';
import Grafana from '../../assets/skills/devops/grafana.png';
import Kibana from '../../assets/skills/devops/kibana.png';
import Miro from '../../assets/skills/useful-skills/miro.png';
import Lucidechart from '../../assets/skills/useful-skills/lucidchart.png';
import Figma from '../../assets/skills/useful-skills/figma.jpg';

const Skills = () => {
  return (
    <div name='skills' className='dark:bg-white dark:text-slate-900 w-full h-auto py-64 bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-auto'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            Skills
          </p>
          <p className='my-4'>{"// These are the technologies I've worked with"}</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <h1 className='skill-title'>Programming:</h1>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <SkillCard img={JavaScript} name='JavaScript'/>
            <SkillCard img={TypeScript} name='TypeScript'/>
            <SkillCard img={React} name='React'/>
            <SkillCard img={Vue} name='Vue'/>
            <SkillCard img={Node} name='NodeJs'/>
            <SkillCard img={Express} name='Express'/>
            <SkillCard img={MongoDb} name='MongoDb'/>
            <SkillCard img={PostgreSql} name='PostgreSql'/>
            <SkillCard img={HTML} name='Html'/>
            <SkillCard img={CSS} name='Css'/>
            <SkillCard img={Tailwind} name='Tailwind'/>
          </div>

          <h1 className='skill-title'>Automatization Testing:</h1>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <SkillCard img={Playwright} name='Playwright'/>
          </div>

          <h1 className='skill-title'>CI/CD(DevOps):</h1>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <SkillCard img={GitHub} name='Github'/>
            <SkillCard img={Gitlab} name='Gitlab'/>
            <SkillCard img={Docker} name='Docker'/>
            <SkillCard img={K8s} name='K8s'/>
            <SkillCard img={Jenkins} name='Jenkins'/>
            <SkillCard img={Grafana} name='Grafana'/>
            <SkillCard img={Kibana} name='Kibana'/>
          </div>

          <h1 className='skill-title'>Useful-skills:</h1>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <SkillCard img={Jira} name='Jira'/>
            <SkillCard img={Clickup} name='Clickup'/>
            <SkillCard img={Trello} name='Trello'/>
            <SkillCard img={Miro} name='Miro'/>
            <SkillCard img={Lucidechart} name='Lucidechart'/>
            <SkillCard img={Figma} name='Figma'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
