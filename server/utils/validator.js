module.exports = ({cardNumber,year,month,cvv,amount})=>{

    let validCN = false
    if(cardNumber && cardNumber.length === 16){
        if(isFinite(cardNumber)){
            validCN = true
           
        }
    }

    let validYear = false
    if(year && year.length === 4){
        if(isFinite(year)){
            validYear = true
            
        }
         
    }

    let validMonth = false
    if(month && isFinite(month) && month.length <= 2){
        if(month>0 && month <= 12){
            validMonth = true
            
        }
        
    }

    let validCvv = false
    if(cvv && cvv.length === 3 ){
        if(isFinite(cvv)){
            validCvv = true
        }
    }

    let validAmount = false
    if(amount && isFinite(amount)){
        validAmount = true      
    }

    if(validAmount&&validCN&&validCvv&&validYear&&validMonth){
        return true
    }
}