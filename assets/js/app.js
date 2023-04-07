// let btn=document.querySelector('#btn');
// let div=document.querySelector('#list');

// btn.onclick=function(){
//     let newtask=document.createElement("h1");
//     newtask.className='tasks';
//     let value=document.querySelector('#info').value;
//     newtask.innerHTML=value;
//     div.appendChild(newtask);
//     console.log(newtask);
// }


let btn=document.querySelector('#btn');

btn.onclick=function(){
    let newtask=document.querySelector('#imp').value;
    let div=document.createElement('div');
    let h1=document.createElement('h1');
    let button=document.createElement('button');

    h1.innerHTML=newtask;
    button.innerHTML='Delete';
    button.className='btn btn-danger';

    div.className='box d-flex justify-content-between';
    div.appendChild(h1);
    div.appendChild(button);
    console.log(div);

    document.querySelector('.tasks').appendChild(div);

}