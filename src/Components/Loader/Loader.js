import React, {useState} from 'react'
import { css } from "@emotion/core";
import { PuffLoader } from 'react-spinners';
 
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;



const Loader = ({isLoading}) => {


    return (
        <div className="sweet-loading">
            <PuffLoader

            css={override}
            size={150}
            color={"#DF49EC"}
            loading={isLoading}
            />
      </div>
    )
}

export default Loader
