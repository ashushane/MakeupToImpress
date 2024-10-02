function choice() {
    let productChoice = prompt("Are you looking for Hair Products? Face Cosmetics? or Body Moisturizer?");

    if (productChoice === null) {
        return; 
    }

    productChoiceChoice = productChoice.toLowerCase().trim(); 

    switch (productChoice) {
        case 'hair':
            window.location.href = 'pedestal.html';
            break;
        case 'hair moisturizer':
            window.location.href = 'pedestal.html';
            break;
        case 'hair moisturizers':
            window.location.href = 'pedestal.html';
            break;
        case 'hair product':
            window.location.href = 'pedestal.html';
            break;
        case 'hair products':
            window.location.href = 'pedestal.html';
            break;
        case 'hair cosmetic':
            window.location.href = 'pedestal.html';
            break;
        case 'hair cosmetics':
            window.location.href = 'pedestal.html';
            break;
        case 'face':
            window.location.href = 'pedestal2.html';
            break;
        case 'face moisturizer':
            window.location.href = 'pedestal2.html';
            break;
        case 'face moisturizers':
            window.location.href = 'pedestal2.html';
            break;
        case 'face product':
            window.location.href = 'pedestal2.html';
            break;
        case 'face products':
            window.location.href = 'pedestal2.html';
            break;
        case 'face cosmetic':
            window.location.href = 'pedestal2.html';
            break;
        case 'face cosmetics':
            window.location.href = 'pedestal2.html';
            break;
        case 'body':
            window.location.href = 'pedestal3.html';
            break;
        case 'body products':
            window.location.href = 'pedestal3.html';
            break; 
        case 'body product':
            window.location.href = 'pedestal3.html';
            break;
        case 'body cosmetic':
            window.location.href = 'pedestal3.html';
            break;
        case 'body cosmetics':
            window.location.href = 'pedestal3.html';
            break;
        case 'body moisturizer':
            window.location.href = 'pedestal3.html';
            break;
        case 'body moizturizers':
            window.location.href = 'pedestal3.html';
            break;
        default:
            alert("It seems like you have not decided yet. Why don't you try to browse our site first?");
    }
}
