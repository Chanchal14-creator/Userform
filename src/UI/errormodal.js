import React from 'react'
import Card from './Card';
import Button from './Button';
import classes from './errormodal.module.css';
function Errormodal(props) {
  return (
    <div>
    <div className={classes.backdrop} onClick={props.onConfirm}/>
    <Card class={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm} >okay</Button>
        </footer>
    </Card>
    </div>
  )
}

export default Errormodal;
