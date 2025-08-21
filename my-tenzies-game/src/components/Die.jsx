export default function Die(props) {

  const styles = {
    backgroundColor: props.isHeld ? "var(--die-held-bg)" : "var(--die-bg)",
    color: "var(--color-text-primary)"
  }

  return (
    <button 
      style={styles}
      onClick={props.hold}
      aria-pressed = {props.isHeld}
      aria-label={`Die with value ${props.value},
        ${props.isHeld ? "held" : "not held"}`}
    >{props.value}</button>
  )
}
