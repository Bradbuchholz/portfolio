import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";


function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="March 2022-March 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Epicodus
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Certificate
          </h4>

          <p>Full Stack Development (HTML, CSS, Jquerry, JavaScript, C#, React</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="December 2022"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CodeCademy
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Certificate
          </h4>

          <p>API Development with Swagger and OpenAPI Course </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="January 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CodeCademy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Certificate
          </h4>
          <p>Learn JavaScript Course</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feburary 2023"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            CodeCademy
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Certificate
          </h4>
          <p>
            Learn React Course
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
export default Experience;