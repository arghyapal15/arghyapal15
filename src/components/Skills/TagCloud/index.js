import React, { useEffect } from "react";
import "./index.scss";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
  // Animation settings for Text Cloud
  useEffect(() => {
    return () => {
      const container = ".tagcloud";
      const texts = [
        'C++',
        'Python',
        'C',
        'Html5',
        'JavaScript',
        'CSS',
        'JavaScript',
        'ReactJS',
        'Typescript',
        'GIT',
        'GITHUB',
        'C++',
        'Python',
        'ES6',
        'C',
        'Html5',
        'CSS',
        'React',
        'Typescript',
        'ES6',
        'GIT',
        'GITHUB',
      ]

      const options = {
        radius: 300,
        maxSpeed: 'fast',
        initSpeed: 'fast',
        keep: false,
      }

      TagCloud(container, texts, options);
    };
  }, []);

  return (
    <>
    <div className="text-shpere">
        {/* span tag className must be "tagcloud"  */}
        <span className="tagcloud"></span>
      </div>
    </>
  );
};

export default TextShpere;