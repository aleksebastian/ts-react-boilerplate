import React from "react";
import styles from "./app.module.css";

type GreetingProps = {
  greeting: string;
};

const Greeting = (props: GreetingProps) => (
  <p className={styles.greeting}>{props.greeting}</p>
);

const App = () => (
  <div className={styles.main}>
    <Greeting greeting="Hello World!" />
    <h3 className={styles.subHeader}>Typescript React boilerplate</h3>
  </div>
);

export default App;
