const urlPageTitle = "JS SPA";

document.addEventListener('click',(e)=>{
    const {target} = e;

    if(!target.matches("ul li a")){
        return;
    }
    console.log(target);
    e.preventDefault();
    route();
});

const routes = {
    404: {
        template: '/SPA/templates/404.html',
        title: ""
    },
    "/SPA/": {
        template: '/SPA/templates/index.html',
        title: ""
    },
    "/": {
        template: '/SPA/templates/index.html',
        title: ""
    },
    "/about": {
        template: '/SPA/templates/about.html',
        title: ""
    },
    "/projects": {
        template: '/SPA/templates/projects.html',
        title: ""
    },
    "/contact": {
        template: '/SPA/templates/contact.html',
        title: ""
    },
};

const route = (event)=>{
    event = event || window.event;
    event.preventDefault();

    window.history.pushState({},"",event.target.href);
    console.log("1",event.target.href);
    urlLocationHandler();
}

const urlLocationHandler = async()=>{
    const location = window.location.pathname;
    console.log("2",location);
    if(location.length == 0){
        location = "/";
    }

    const route = routes[location] || routes['404'];

    console.log(route);
    const html = await fetch(route.template).then((res)=>res.text());
    
    console.log(html);
    document.querySelector('.section').innerHTML = html;

    document.title = route.title;
}

window.onpopstate = urlLocationHandler;

window.route = route;

urlLocationHandler();