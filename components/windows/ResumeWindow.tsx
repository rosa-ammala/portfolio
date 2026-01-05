"use client";

function EducationItem({
  degree,
  field,
  school,
  period,
}: {
  degree: string;
  field: string;
  school: string;
  period: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingBottom: "14px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <strong style={{ fontSize: 14 }}>{degree}</strong>
        <span style={{ fontSize: 12, opacity: 0.7 }}>{period}</span>
      </div>

      <span style={{ fontSize: 13, fontStyle: "italic", opacity: 0.85 }}>
        {field}
      </span>

      <span style={{ fontSize: 13, opacity: 0.8 }}>{school}</span>
    </div>
  );
}

function Experience({
  company,
  title,
  period,
  description,
}: {
  company: string;
  title: string;
  period: string;
  description: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        paddingBottom: "14px",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <strong style={{ fontSize: 14 }}>{company}</strong>
        <span style={{ fontSize: 12, opacity: 0.7 }}>{period}</span>
      </div>

      <span style={{ fontSize: 13, fontStyle: "italic", opacity: 0.85 }}>
        {title}
      </span>

      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
}

export function ResumeWindow() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {/* EDUCATION */}
      <h2 style={{ margin: 0, fontSize: 18, color: "rgba(118, 71, 184, 1)" }}>Education</h2>

      <EducationItem
        degree="Information and Communication Technology"
        field="Software Development specialization"
        school="Jamk University of Applied Sciences"
        period="2021 – 2025"
      />

      {/* WORK EXPERIENCE */}
      <h2 style={{ margin: 0, fontSize: 18, color: "rgba(118, 71, 184, 1)" }}>Work Experience</h2>

      <Experience
        company="MyHomesID Oy"
        title="Software Developer Commission Worker"
        period="11/2025 – now"
        description="
          Developing and improving the look and usability of a knowledge base product using Angular (TypeScript) in an AWS environment. 
          Projects around developing a dynamic forms feature. 
          Including reporting and documenting completed work.
        "
      />

      <Experience
        company="MyHomesID Oy"
        title="Software Developer Intern"
        period="01/2025 – 06/2025"
        description="
          Developing and improving the look and usability of a knowledge base product using Angular (TypeScript) in an AWS environment. 
          Including reporting and documenting completed work.
        "
      />
    </div>
  );
}
