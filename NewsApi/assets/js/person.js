
            const list = document.getElementById('list');
            const search = document.getElementById('search');
            const listItem = [];

            search.addEventListener("input", (e) => filterInput(e.target.value));

            getDateFromPublicAPI();

            async function getDateFromPublicAPI (){
              const responseAPI = await fetch('https://randomuser.me/api?results=50');
              // const responseAPI = await fetch(' https://newsdata.io/api/1/news?country=vi&category=business&apikey=pub_3789355224b269b89813a1dfbef3158a2e003');
             
              const {results} = await responseAPI.json();
              console.log("results :>>", results);
              list.innerHTML = 'Loading...';
              setTimeout(() => {
                list.innerHTML = '';
                results.forEach(result => {
                const divItem = document.createElement('div');
                listItem.push(divItem);
                /*Tự động tạo phần tử bằng  `` được gọi là Template literals, hay còn được biết đến với tên gọi "template strings". Đây là một 
                tính năng được giới thiệu trong phiên bản ECMAScript 6 (ES6) của JavaScript, cho phép bạn tạo chuỗi nhiều dòng và nhúng biểu thức 
                vào bên trong.
                */
               divItem.innerHTML = `    
               <img src="${result.picture.thumbnail}" alt="${result.email} />
               <div class="detail">
                 <h2>${result.name.title}. ${result.name.first} ${result.name.last}</h2>
                 <p>${result.email}</p>
               </div>
                `;
                list.appendChild(divItem);
              });}, 2000)
            }

            function filterInput(KeySearch) {
              const searchTerm = KeySearch.toLowerCase();
              listItem.forEach(item => {
                if(item.innerText.toLowerCase().includes(searchTerm)){
                  item.classList.remove('hidden');
                } else {
                  item.classList.add('hidden');
                }
              })
            }