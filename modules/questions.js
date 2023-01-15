export function questions(data) {
  const downArrow = "../assets/pictures/arrow-down.svg";
  const upArrow = "../assets/pictures/arrow-up.svg";
  var size = window.innerWidth;
  var desktopWidth = size > 414;

  window.addEventListener(
    "load",
    function () {
      data.map((item) => {
        size = window.innerWidth;
        let clickItem = document.getElementById(`question-arrow-0${item.id}`);
        let container = document.getElementById(
          `question-container-0${item.id}`
        );
        let bottom_container = document.getElementById(
          `question-container-0${item.id + 1}`
        );
        let sub_container = document.getElementById(`qiestion-0${item.id}`);
        const answer = document.getElementById(`answer-0${item.id}`);

        //adjust question containers position

        window.addEventListener("resize", (e) => {
          size = window.innerWidth;
          desktopWidth = size > 414;
          console.log(size);
          if (item.id == 1) {
            bottom_container.style.top = desktopWidth ? "224px" : "451px";
          }
          if (item.id == 2) {
            bottom_container.style.top = desktopWidth ? "299px" : "520px";
          }
          if (item.id == 3) {
            bottom_container.style.top = desktopWidth ? "374px" : "589px";
          }
        });

        //handle questions arrow click

        clickItem.addEventListener("click", (e) => {
          if (
            container.classList.toString().includes("question-conteiner-hide")
          ) {
            container.classList.remove("question-conteiner-hide");
            container.classList.add("question-conteiner-show");
            clickItem.attributes.src.nodeValue = upArrow;
            sub_container.classList.add("question-sub-container-active");
            sub_container.classList.remove("question-sub-container-default");
            answer.classList.add("answer-active");

            if (item.id == 1) {
              bottom_container.style.top = desktopWidth ? "291px" : "518px";
            }
            if (item.id == 2) {
              bottom_container.style.top = desktopWidth ? "366px" : "587px";
            }
            if (item.id == 3) {
              bottom_container.style.top = desktopWidth ? "441px" : "656px";
            }
          } else {
            container.classList.remove("question-conteiner-show");
            container.classList.add("question-conteiner-hide");
            clickItem.attributes.src.nodeValue = downArrow;
            sub_container.classList.add("question-sub-container-default");
            sub_container.classList.remove("question-sub-container-active");
            answer.classList.remove("answer-active");
            if (item.id == 1) {
              bottom_container.style.top = desktopWidth ? "224px" : "451px";
            }
            if (item.id == 2) {
              bottom_container.style.top = desktopWidth ? "299px" : "520px";
            }
            if (item.id == 3) {
              bottom_container.style.top = desktopWidth ? "374px" : "589px";
            }
          }

          //mobile
        });
      });
    },
    true
  );

  return data.map((item) => {
    return `
            <div id='question-container-0${item.id}' class='question-container question-conteiner-hide'>
               <div id='qiestion-0${item.id}' class='question-sub-container question-sub-container-default'>
                 <p class='question'>${item.question}</p>
                 <img 
                   src=${downArrow} 
                   alt ='arrow'  
                   class='question-arrow' 
                   id='question-arrow-0${item.id}'
                  />
               </div>
               <p class='answer' id='answer-0${item.id}'>${item.answer}</p>
            </div>
           
         `;
  });
}
