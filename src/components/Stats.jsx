import { Code2, UsersRound, Lightbulb, Coffee } from "lucide-react";

export default function Stats() {
  return (
    <>
      <section className="stats" aria-label="Cling Info Tech at a glance">
        <div className="stat">
          <Code2 />
          <strong>32,387,122</strong>
          <span>Lines of code</span>
        </div>
        <div className="stat">
          <UsersRound />
          <strong>350+</strong>
          <span>Happy clients</span>
        </div>
        <div className="stat">
          <Lightbulb />
          <strong>390+</strong>
          <span>Projects completed</span>
        </div>
        <div className="stat">
          <Coffee />
          <strong>1,500+</strong>
          <span>Coffee with clients</span>
        </div>
      </section>
    </>
  );
}
