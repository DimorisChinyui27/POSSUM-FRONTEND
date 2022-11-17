enum Languages{
    English,
    French,
    German,

}
enum PaymentMethods{
    BankTransfer,
    PayPal,
    Payoneer,
}
export interface StepsProps{
    activeStep: number;
    listOfSteps: steps[];
    changeStep: Function;
}
export interface steps{
    title: string;
    description: string;
}
 export interface User {
    Email: string;
     Password: number;
     DOB?: string;
     language: string;// Languages;
     PaymentMethod: string; //PaymentMethods;
     Interests: any;
 }
  export  interface prefix {
	IconName: string;
	className: string;
};
  
  //export {}
  export interface activeUser {
    id: string;
    username: string;
    url: string;
    
}
  
 