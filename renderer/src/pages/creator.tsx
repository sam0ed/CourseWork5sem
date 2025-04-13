import React from 'react';
import '../styles/index.css';

export default function Creator() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">
      <img src="https://user-images.githubusercontent.com/10498744/210012254-234538ff-d198-48aa-8964-37e6fd45d227.gif" alt="MasterHead" width="100%" />
      <div className="text-center p-md" style={{ maxWidth: '900px' }}>
        <h1 className="text-accent" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 48, fontWeight: 'bold', textShadow: '2px 2px 5px #0ff0fcbe' }}>
          Viktor Loshak
        </h1>
        <p>
          <strong>
            <code>Software Engineer</code>
          </strong>
        </p>
        <p>
          👋 Hey there! I'm Viktor Loshak, a software engineer and a student in Kyiv Polytechnic Institute. I work with Java, TypeScript, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, and more. Passionate about creating helpful applications and learning from fellow developers. Let's connect and build impactful software solutions together.
        </p>
      </div>

      <hr className="w-full m-sm" style={{ maxWidth: '900px' }} />
      <div className="text-center p-md" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontSize: 35 }}>📙 Languages and Tools</h2>

        <p className="flex flex-wrap justify-center" style={{ gap: '5px' }}>
          <a href="https://www.typescriptlang.org/">
            <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
          </a>
          <a href="https://www.java.com/">
            <img src="https://img.shields.io/badge/Java-3a75b0?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
          </a>
          <a href="https://www.javascript.com/">
            <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
          </a>
          <a href="https://reactjs.org/">
            <img src="https://img.shields.io/badge/React.js-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React.js" />
          </a>
          <a href="https://reactnative.dev/">
            <img src="https://img.shields.io/badge/React_Native-20232a?style=for-the-badge&logo=react&logoColor=blue" alt="React Native" />
          </a>
          <a href="https://nextjs.org/">
            <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
          </a>
          <a href="https://jquery.com/">
            <img src="https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white" alt="jQuery" />
          </a>
          <a href="https://nodejs.org/">
            <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
          </a>
          <a href="https://expressjs.com/">
            <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
          </a>
          <a href="https://expo.dev/">
            <img src="https://img.shields.io/badge/Expo-5f56e1?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
          </a>
          <a href="https://www.mongodb.com/">
            <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
          </a>
          <a href="https://sass-lang.com/">
            <img src="https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="SCSS" />
          </a>
          <a href="https://getbootstrap.com/">
            <img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white" alt="Bootstrap" />
          </a>
          <a href="https://tailwindcss.com/">
            <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
          </a>
          <a href="https://www.w3.org/Style/CSS/">
            <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
          </a>
          <a href="https://html.spec.whatwg.org/multipage/">
            <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
          </a>
          <a href="https://git-scm.com/">
            <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
          </a>
          <a href="https://github.com/">
            <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
          </a>
          <a href="https://code.visualstudio.com/">
            <img src="https://img.shields.io/badge/Visual_Studio_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />
          </a>
          <a href="https://www.npmjs.com/">
            <img src="https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="NPM" />
          </a>
          <a href="https://www.figma.com/">
            <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
          </a>
        </p>
      </div>

      <hr className="w-full m-sm" style={{ maxWidth: '900px' }} />
      <div className="text-center p-md mb-lg" style={{ maxWidth: '900px' }}>
        <h2 style={{ fontSize: 35 }}>📊 Stats</h2>

        <div className="text-center">
          <img src="https://github-readme-stats.zohan.tech/api?username=sam0ed&hide=stars&count_private=true&show_icons=true&theme=algolia&border_radius=20" style={{ maxWidth: '100%', height: 'auto', marginBottom: '10px' }} />
          <br />
          <img src="https://github-readme-stats.zohan.tech/api/top-langs/?username=sam0ed&layout=compact&show_icons=true&theme=algolia&border_radius=20" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
}

