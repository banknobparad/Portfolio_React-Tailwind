
import { useState } from "react";
import FormattedDate from "../../conponents/FormattedDate";
import Picture from "../../conponents/Picture";
import TitleLink from "../../conponents/TitleLink";
import Material from "../../conponents/Material";
import Description from "../../conponents/Description";
import Tech from "../../conponents/Tech";

import { data } from "../../contents/experience"

const SECTION_ID = "experience-section"

const Experience = () => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  return (
    <div className="">
      <div className="text-primaryTitle font-medium px-2">Experience</div>
      {
        data.map(({
          date = "",
          title = "",
          link = "",
          materials = [],
          description = [],
          skills = [],
          picture = "",
          picText = "",
        }, index) => (
          <div
            key={`${SECTION_ID}-${index}-${title.replaceAll("", "")}`}
            className={`grid grid-cols-[25%_75%] ${isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBgHover" : ""
              } rounded-md px-2 py-6 duration-300`}
            onMouseEnter={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })}
            onMouseLeave={() => setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })} >
            <div>
              <FormattedDate isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]}>
                {date}
              </FormattedDate>
              <Picture picture={picture} title={picText} />
            </div>
            <div>
              <div className="grid gap-y-4">
                <TitleLink isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} title={title} link={link} />

                <div className="flex gap-4 text-xl">
                  {
                    materials.map((e, i) => (
                      <Material key={`${e}--${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} icon={e.type} link={e.link} />
                    ))
                  }
                </div>
                {
                  description.map((e, i) => (
                    <Description key={`${e}-description-${i}`} description={e} />
                  ))
                }

                {
                  skills.map((e, i) => (

                    <Tech key={`skills-${i}`} isHighLight={isMouseEnter[`${SECTION_ID}-${index}`]} data={e} />

                  ))
                }

              </div>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default Experience;
