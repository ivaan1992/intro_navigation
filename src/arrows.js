export function arrowsFunction() {
    //Desktop

    const arrowDownFeat = document.querySelector('.arrow-down-feat');
    const arrowUpFeat = document.querySelector('.arrow-up-feat');
    const arrowDownComp = document.querySelector('.arrow-down-comp');
    const arrowUpComp = document.querySelector('.arrow-up-comp');

    const featureLink = document.querySelector('.feature-menu-link');
    const featuresMenu = document.querySelector('.features-menu');

    const companyLink = document.querySelector('.company-menu-link');
    const companiesMenu =  document.querySelector('.company-menu');


    featureLink.addEventListener('click', () => {
        featuresMenu.classList.toggle('inactive');
        arrowDownFeat.classList.toggle('inactive');
        arrowUpFeat.classList.toggle('inactive');
    });

    companyLink.addEventListener('click', () => {
        companiesMenu.classList.toggle('inactive');
        arrowDownComp.classList.toggle('inactive');
        arrowUpComp.classList.toggle('inactive');
    });

    //Mobile 
    const arrowDownFeatMob = document.querySelector('.arrow-down-feat-mob');
    const arrowUpFeatMob = document.querySelector('.arrow-up-feat-mob');
    const arrowDownCompMob = document.querySelector('.arrow-down-comp-mob');
    const arrowUpCompMob = document.querySelector('.arrow-up-comp-mob');
    
    const featureLinkMob = document.querySelector('.feature-menu-mob');
    const featuresMobMenu = document.querySelector('.features-menu-mob');

    const companyLinkMob = document.querySelector('.company-menu-mob');
    const companiesMobMenu = document.querySelector('.companies-menu-mob');

    featureLinkMob.addEventListener('click', () => {
        featuresMobMenu.classList.toggle('inactive');
        arrowDownFeatMob.classList.toggle('inactive');
        arrowUpFeatMob.classList.toggle('inactive');
    });

    companyLinkMob.addEventListener('click', () => {
        companiesMobMenu.classList.toggle('inactive');
        arrowDownCompMob.classList.toggle('inactive');
        arrowUpCompMob.classList.toggle('inactive');
    });
}
