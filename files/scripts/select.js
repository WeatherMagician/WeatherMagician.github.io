var currentSimList = ["haze", "fog", "smog", "rain", "snow"];
var currentSim = "snow";
var currentSimId = 4;
var currentSceneList = ["garden", "treehill","stump", "bicycle", "road1","road2", "gate", "1538", "1728", "1908"];
var currentScene = "gate";
var currentSceneId = 6;
var currentMethodList = ["ours", "GAN", "Diffusion", "Swap", "Sty"];
var currentMethod = "ours";

function ChangeSim(idx){
    var li_list = document.getElementById("sim-view-ul").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }
    li_list[idx].className = "active";

    currentSim = currentSimList[idx];
    currentSimId = idx;

    // var m_list = document.getElementById("method-view-ul").children;
    // m_list[0] = "active";
    // for (i=1;i<m_list.length;i++){
    //     m_list[i].className = "disabled";
    //     console.log(m_list[i].children[0].onclick)
    //     m_list[i].children[0].onclick = "";
    // }
    // console.log("###")
    // for (i=0;i<m_list.length;i++){
    //     console.log(m_list[i].children[0].onclick)
    // }
    // if(currentSceneId<5){
    //     if(idx==0){
    //         m_list[1].className = "";
    //         m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
    //         m_list[2].className = "";
    //         m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
    //     }
    //     else if(idx==1){
    //         m_list[3].className = "";
    //         m_list[3].children[0].onclick = function func(){ChangeMethod(3);}
    //         m_list[4].className = "";
    //         m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
    //     }
    //     else if(idx==2){
    //         m_list[1].className = "";
    //         m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
    //         m_list[4].className = "";
    //         m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
    //     }
    // }

    document.getElementById("simulation_video").src = "files/videos/ours/"+ currentSim + '/' + currentScene + '.mp4';
    // ChangeMethod(0);
}

function ChangeScene(idx){
    var li_list = document.getElementById("scene-view-ul").children;
    // var m_list = document.getElementById("method-view-ul").children;
    // console.log(idx);
    // console.log(li_list);

    for(i = 0; i < li_list.length; i++){
        li_list[i].className = "";
    }

    // m_list[0].className = "active";
    if (idx>=5){
        li_list[idx+1].className = "active";
        // for (i=1;i<m_list.length;i++){
        //     m_list[i].className = "disabled";
        //     m_list[i].children[0].onclick = "";
        // }
    }
    else{
        li_list[idx].className = "active";
    //     if(currentSimId==0){
    //         m_list[1].className = "";
    //         m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
    //         m_list[2].className = "";
    //         m_list[2].children[0].onclick = function func(){ChangeMethod(2);}
    //     }
    //     else if(currentSimId==1){
    //         m_list[3].className = "";
    //         m_list[3].children[0].onclick = function func(){ChangeMethod(3);}
    //         m_list[4].className = "";
    //         m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
    //     }
    //     else if(currentSimId==2){
    //         m_list[1].className = "";
    //         m_list[1].children[0].onclick = function func(){ChangeMethod(1);}
    //         m_list[4].className = "";
    //         m_list[4].children[0].onclick = function func(){ChangeMethod(4);}
    //     }
    }
    
    currentScene = currentSceneList[idx];
    currentSceneId = idx;

    let video = document.getElementById("simulation_video")
    let container = video.parentNode
    video.src = "files/videos/ours/"+ currentSim + '/' + currentScene + '.mp4';

    container.style = "width: 100%; opacity: 0;"
    setTimeout(()=>{
        container.style = "width: 100%; opacity: 1;"
        video.load();
    }, 1000)

    // ChangeMethod(0);
}

function ChangeMethod(idx){
    var li_list = document.getElementById("method-view-ul").children;
    console.log(idx);
    console.log(li_list);
    for(i = 0; i < li_list.length; i++){
        if (li_list[i].className === "disabled"){
            continue
        }
        li_list[i].className = "";
    }
    li_list[idx].className = "active";
    currentMethod = currentMethodList[idx]
    document.getElementById("baseline").src = "files/videos/ours/" + currentMethod +'/'+ currentSim +'/'+ currentScene + '.mp4';
    if(idx == 0){
        document.getElementById("ours").style="width:100%";
        document.getElementById("baseline").style="width:0%";
    }
    else if(idx >= 1){
        document.getElementById("ours").style="width:0%";
        document.getElementById("baseline").style="width:100%";
    }
}