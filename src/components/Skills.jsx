function Skills() {
  const skills = [
    { name: 'Flutter / Dart', value: 98 },
    { name: 'Tailwind CSS', value: 95 },
    { name: 'Python', value: 95 },
    { name: 'NestJS / Node.js', value: 98 },
    { name: 'Firebase & PostgreSQL', value: 99 },
  ];

  return (
    <section className="w-full bg-[#f5f8fd] py-14" id="skill">
      <div className="ml-8 md:ml-14 mr-8 md:mr-14">
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-[#4aa79b]">What I bring to the table</p>
      </div>

      <div className="pt-2 ml-8 md:ml-14 text-[32px] mr-10 font-bold">
        <h2 className="text-[#173b6c] font-railway">Skills</h2>
        <div className="h-1 w-14 bg-[#149ddd] mt-2"></div>
      </div>

      <p className="mt-6 ml-8 md:ml-14 mr-8 md:mr-14 max-w-[760px] text-[17px] leading-8 text-[#5a6270]">
        I work across the stack, but I go deepest where it counts: fast, accessible interfaces up front and dependable, well-structured systems underneath. Here's where I currently rate my hands-on experience.
      </p>

      <div className="mt-10 ml-8 mr-8 md:ml-14 md:mr-14 grid gap-6 md:grid-cols-2">
        {skills.map((skill) => (
          <div key={skill.name} className="w-full">
            <div className="mb-2 flex items-baseline justify-between font-semibold text-[#16324a]">
              <h1 className="font-[Fraunces] text-[15.5px] font-semibold">{skill.name}</h1>
              <h1 className="font-mono text-[12px] font-medium text-[#b9812f]">{skill.value}%</h1>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full border border-[rgba(22,50,74,0.10)] bg-[#f8f7f3]">
              <div className="h-full rounded-full bg-[#4aa79b]" style={{ width: `${skill.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;