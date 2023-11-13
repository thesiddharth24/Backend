class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong !!",
        errors=[],
        stack =""
    ){
        super(message),
        this.statusCode=statusCode,
        this.data=null,
        this.message=message,
        this.success=false,
        this.errors=errors
    

    if(stack){
        this.stack=stack;
    }
    else {
        //store the current call stack in the error object.
        //         The first argument (this) is the object on which the stack trace will be captured. In this case, it's the current object being constructed.
        // The second argument (this.constructor) is the constructor function where the stack trace is captured. This ensures that the stack trace reflects the point of instantiation of the object, not the point where Error.captureStackTrace is called.
       Error.captureStackTrace(this,this.constructor);
    }

};
    
}

//node give error tracing or we can say standardisation 

export {ApiError}