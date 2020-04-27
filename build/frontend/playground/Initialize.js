function CreateItem(label, click) {
    let anchor = document.createElement('a');
    anchor.href = '#';
    anchor.text = label;
    anchor.setAttribute('onclick', click);
    let li = document.createElement('li');
    li.appendChild(anchor);
    return li;
}
function CreateHeader() {
    let header = document.createElement('h3');
    header.style.marginLeft = '0.5em';
    header.textContent = 'HakuNeko NW.js (Prototype)';
    return header;
}
function CreateList() {
    let list = document.createElement('ul');
    list.appendChild(CreateItem('About', 'Demo.About()'));
    list.appendChild(CreateItem('FetchHeadersTest', 'Demo.FetchHeadersTest()'));
    return list;
}
function CreateApp() {
    let header = CreateHeader();
    let list = CreateList();
    return [header, list];
}
export default function Initialize(hook) {
    let root = document.querySelector(hook);
    for (let element of CreateApp()) {
        root.appendChild(element);
    }
}
//# sourceMappingURL=Initialize.js.map