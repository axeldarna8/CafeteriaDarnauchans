import React from "react";

export const ItemDetailContainer = (props) => {
    return (
        <>
          <p style={styles.container} > {props.greeting} </p>
        </>
      );
}

const styles = {
    container:{
        textAlign: 'center',
        marginTop: 20,
        fontWeight: 'bold',
    }
};