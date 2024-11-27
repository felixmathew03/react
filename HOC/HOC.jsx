import React from "react";

const withLoader=(WrapperComponent)=>{
    return function withLoaderComponent({isLoading,...props}){
        if (isLoading) {
            return <div>Loading........</div>
        }
        return <WrapperComponent {...props}/>
    }
}

export default withLoader;