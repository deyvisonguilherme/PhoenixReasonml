let component = ReasonReact.statelessComponent("Page");  
let handleClick = (_event, _self) => Js.log("clicked!");

let rec factorial = (n) => 
  n <= 0 
  ? 1 
  : n * factorial(n - 1);

Js.log(factorial(6));

let make = (~message, _children) => {  
  ...component,  
  render: self =>  
    <div onClick=(self.handle(handleClick))>  
      (ReasonReact.string(message))  
     </div>,  
};
