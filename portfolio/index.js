function addPortfolio(params = {}) {
    const template = document.querySelector('#portfolio__template');
    const portfolioContainer = document.querySelector('.portfolio__template');
    template.content.querySelector('.portfolio__img').src = params.image;
    template.content.querySelector('.portfolio__subtitle').textContent = params.title;
    template.content.querySelector('.portfolio__paragraph').textContent = params.paragraph;
    template.content.querySelector('.portfolio__url').href = params.url;

    const clone = document.importNode(template.content, true);
    portfolioContainer.appendChild(clone);
}

function getDataBasePortfolio() {
    return fetch('https://cdn.contentful.com/spaces/u29bhevfkwtl/environments/master/entries?access_token=8_TL01eNg6iCgTonIu91bU60TiUrumDrxXgcBPU8ZmY&content_type=portfolio').then((res)=> {
        return res.json();
    }).then((data)=> {
        const collection = data.items.map((item)=> {
            const image = getByIdImage(item.fields.imagen.sys.id, data);
            const imageUrl = image.fields.file.url;
            return {
                image: imageUrl,
                title: item.fields.titulo,
                paragraph: item.fields.parrafo,
                url: item.fields.url,
            }
        });
        return collection;
    });
}

function getByIdImage(id, data) {
    const idEncontrado = data.includes.Asset.find((asset)=> {
        return asset.sys.id == id;
    });
    return idEncontrado;
}

function fitterPortfolio() {
    const dataBase = getDataBasePortfolio().then((data)=> {
        for (const item of data) {
            addPortfolio(item);
        }
    });
    return dataBase;
}





function main() {
    fitterPortfolio();
    headerComponent(document.querySelector('.header__component'));
    footerComponent(document.querySelector('.footer__component'))
    headerMenu();
    getDataBasePortfolio();
}
main();
