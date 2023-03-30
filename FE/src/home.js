showNav();

async function showList() {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)

        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/blogs',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: async (blogs) => {
                let html = ` <div class="container">
                    <div class="row">
                        <div class="col-sm-8">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                <!-- Indicators -->
                                <ol class="carousel-indicators">
                                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                                    <li data-target="#myCarousel" data-slide-to="1"></li>
                                </ol>
                
                                <!-- Wrapper for slides -->
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1553067904/DiaryHeroArticle_Bloom-FamilyPortrait-02_001_Default.jpg"
                                             alt="Los Angeles" class="d-block" style="width:100%">
                                        <div class="carousel-caption">
                                            <h3></h3>
                                            <p></p>
                                        </div>
                                    </div>
                
                                    <div class="item">
                                        <img src="https://media.gucci.com/content/HeroRegularStandard_1600x675/1671464768/HeroRegularStandard_cny-beauty-2022-19dec22-09_001_Default.jpg"
                                             alt="Chicago" class="d-block" style="width:100%">
                                        <div class="carousel-caption">
                                            <h3>More Sell $</h3>
                                            <p>Lorem ipsum...</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1596016804/DiaryHeroArticle_BEAUTY-BLOOM-REVIVAL-02_001_Default.jpg"
                                             alt="New York" class="d-block" style="width:100%">
                                        <div class="carousel-caption">
                                            <h3>More Sell $</h3>
                                            <p>Lorem ipsum...</p>
                                        </div>
                                    </div>
                                </div>
                
                                <!-- Left and right controls -->
                                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="well">
                                <div class="well">
                                    <h4> Sometime products with Gucci flora so beautiful... </h4>
                                    <p>Between Fiction and Reality</p>
                                </div>
                                <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_950x680/1669629625/DiaryHeroArticle_gucci-beauty-wishes-campaign-01_001_Default.jpg"
                                     alt="gucci" width="100%">
                            </div>
                
                        </div>
                    </div>
                    <hr>
                </div>
                
                <div class="container text-center">
                    <h3>Disrupting the traditional olfactive families that classify fragrances, Gucci Mémoire d’une Odeur creates a new
                        one: Mineral Aromatic.</h3>
                    <br>
                    <div class="row">
                        <div class="col-sm-3">
                            <img src="https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1553067903/DiaryArticleSingle_Bloom-FamilyPortrait-01_001_Default.jpg"
                                 class="img-responsive" style="width:100%" alt="Image">
                            <p>The new Gucci Bloom fragrance campaign tells the story of four women living in a garden of dreams.</p>
                        </div>
                        <div class="col-sm-3">
                            <img src="https://media.gucci.com/content/DiaryArticleSingle_Standard_1536x2150/1596095103/DiaryArticleSingle_BEAUTY-BLOOM-REVIVAL-04_001_Default.jpg"
                                 class="img-responsive" style="width:100%" alt="Image">
                            <p>Between Fiction and Reality </p>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <p>“In the campaign, the flowers live a life of their own in a world, let’s say, real but surreal. The
                                    dream of nature is a psychedelic dream, suspended in time, where Anjelica, Florence, Jodie and Susie
                                    embody four different ways of being a woman.”</p>
                            </div>
                            <div class="well">
                                <h3>"The new Gucci Bloom"</h3>
                                <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_3200x1624/1596016804/DiaryHeroArticle_BEAUTY-BLOOM-REVIVAL-01_001_Default.jpg"
                                     style="width: 100%" alt="gucci">
                            </div>
                        </div>
                        <div class="col-sm-3">
                            <div class="well">
                                <h3>"Gucci flora"</h3>
                                <img src="https://media.gucci.com/content/DiaryHeroArticle_Standard_950x680/1553067904/DiaryHeroArticle_Bloom-FamilyPortrait-01_001_Default.jpg"
                                     style=" width:100%" alt="gucci">
                            </div>
                            <div class="well">
                                <p>The new Gucci Bloom fragrance campaign tells the story of four women living in a garden of
                                    dreams.</p>
                            </div>
                        </div>
                    </div>
                    <hr>
                </div>
                <link rel="stylesheet" href="../BE/public/blog2.css">
               
                <div class="row">`;
                if (token.role === 'admin') {
                    await blogs.map(item => {
                        html += `
                                  <div class="col-3">
                                  <div class="card" style="width: 18rem;">
                                   <img src="${item.image}" width="200px" height="200px" class="card-img-top" alt="...">
                                   <div class="card-body">
                                    <h5 class="card-title">${item.nameCategory}</h5>
                                    <h6 class="card-title">${item.status},${item.date}</h6>
                                    <h6 class="card-title">${item.username}</h6>
                                    <h6 class="card-title"><div id="blog${item.id}"></div> <a href="#" class="btn btn-primary" onclick="checkLike(${item.id}, ${token.idUser})">Like</a></h6>
                                    <p class="card-text">${item.content}</p>
                                    <a href="#" class="btn btn-primary" onclick="remove(${item.id})">Delete</a>
                                    <a  href="#"  class="btn btn-primary " onclick="showComment(${item.id})">Comment</a>
                                   </div>
                                 </div>
                                </div>
                                `


                    })
                    await $('#tbody').html(html)
                     blogs.map(item => {
                        $.ajax({
                            type: 'GET',
                            url: `http://localhost:3000/likes/countLike/${item.id}`,
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + token.token
                            },
                            success: (likes) => {
                                $(`#blog${item.id}`).html(likes[0].likes);
                            }
                        })
                    })
                } else {
                    await blogs.map(item => {
                        html += `
                                  <div class="col-3">
                                  <div class="card" style="width: 18rem;">
                                   <img src="${item.image}" width="200px" height="200px" class="card-img-top" alt="...">
                                   <div class="card-body">
                                    <h5 class="card-title">${item.nameCategory}</h5>
                                    <h6 class="card-title">${item.status},${item.date}</h6>
                                    <h6 class="card-title">${item.username}</h6>
                                    <h6 class="card-title"><div id="blog${item.id}"></div> <a href="#" class="btn btn-primary" onclick="checkLike(${item.id}, ${token.idUser})">Like</a></h6>
                                    <p class="card-text">${item.content}</p>
                                    <a  href="#"  class="btn btn-primary " onclick="showComment(${item.id})">Comment</a>
                                   </div>
                                 </div>
                                </div>
                                `


                    })
                    await $('#tbody').html(html)
                    blogs.map(item => {
                        $.ajax({
                            type: 'GET',
                            url: `http://localhost:3000/likes/countLike/${item.id}`,
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: 'Bearer ' + token.token
                            },
                            success: (likes) => {
                                $(`#blog${item.id}`).html(likes[0].likes);
                            }
                        })
                    })

                }

            }
        })
    }


}

function showComment(id) {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/comments/showComment/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (comments) => {
                let html = `
                <p>${token.username}</p>
                <input id="comment" placeholder="Comment">
                <button onclick="commentSave(${id},${token.idUser})">Save</button>
                <br>
                <br>
                <hr>`;
                ;
                comments.map(item => {
                    html += `
                <h6>${item.username}</h6>
                <p>${item.comment}</p>
                <hr>
                   `
                })
                $('#body').html(html)

            }
        })
    }
}

function checkLike(idBlog, idUser) {
    let token = localStorage.getItem('token')
    token = JSON.parse(token)
    let like = {
        user: idUser,
        blog: idBlog
    }
    $.ajax({
        type: 'PUT',
        url: `http://localhost:3000/likes/checkLike`,
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token.token
        },
        data: JSON.stringify(like),
        success: () => {
            showHome();
        }
    })
}

function commentSave(idBlog, idUser) {
    let user = idUser;
    let blog = idBlog;
    let comment = $('#comment').val();
    let Comment = {
        user: user,
        blog: blog,
        comment: comment
    };
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/comments/commentSave`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(Comment),
        success: () => {
            showComment(idBlog);
        }
    })


}


function getCategoriesCreate() {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/blogs/getCategories',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (categories) => {
                // console.log(categories)
                let Categories = ``;
                for (const category of categories) {
                    Categories += `
                    <option value=${category.id}>${category.name}</option>
                `
                }
                $('#categoryAdd').html(Categories);
            }
        })
    }
}

function showFormAdd() {
    let token = localStorage.getItem('token')
    token = JSON.parse(token)
    // console.log(token)
    $('#body').html(` 
 <div  style="display: flex; justify-content: center">
 <form style="width: 50%">
 <div> <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Content</label>
    <input type="text" class="form-control" id="content" aria-describedby="emailHelp"  >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Status</label>
    <input type="text" class="form-control" id="status">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="file" id="fileButton" onchange="uploadImage(event)">
             <div id="imgDiv"></div>
  </div>
   <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Date</label>
    <input type="text" class="form-control" id="date">
  </div>
  <div>
    <label for="exampleInputPassword1" class="form-label">Category</label>
  <select id="categoryAdd">
<!--             <option selected>Category</option>-->
             </select>
</div>
  
  <button class="btn btn-primary" onclick="add()">Add</button>
   </div>
</form>
</div>
 
`)
    getCategoriesCreate();
}

function showHome() {
    $('#body').html(`
        <div id="tbody">
                         

        </div>
        
   `)
    showList();
}

function showNav() {
    let token = localStorage.getItem('token');
    token = JSON.parse(token)
    if (token) {
        if (token.role === 'member') {
            $('#nav').html(`

<nav class="navbar" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">${token.username}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onclick="showHome()">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" onclick="showFormAdd()">Add</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#" onclick="logout()">LogOut</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link" onclick="showMyList()">My List</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onkeyup="searchProduct(this.value)">
<!--        <button class="btn btn-outline-success" type="submit">Search</button>-->
      </form>
    </div>
  </div>
</nav>

    `)
        } else {
            $('#nav').html(`
<nav class="navbar" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">${token.username}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" onclick="showHome()">Home</a>
        </li>
       
         <li class="nav-item">
          <a class="nav-link" href="#" onclick="logout()">LogOut</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link" onclick="userManager()">User Manager</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onkeyup="searchProduct(this.value)">
<!--        <button class="btn btn-outline-success" type="submit">Search</button>-->
      </form>
    </div>
  </div>
</nav>

    `)
        }

    } else {
        $('#nav').html(`
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        
       
         <li class="nav-item">
          <a class="nav-link" href="#" onclick="showFormLogin()" style="color: blue">Login</a>
        </li>
     
        <li class="nav-item">
          <a class="nav-link" onclick="showFormRegister()" style="color: red">Register</a>
        </li>
      </ul>
  
    </div>
  </div>
</nav>

    `)
    }
}

function showMyList() {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        console.log(token, 2)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/blogs/myList/${token.idUser}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (blogs) => {
                let html = '<div class="row row-cols-1 row-cols-md-3 g-4">';

                blogs.map(item => {
                    html += `<div class="card" style="width: 18rem;">
                                  <img src="${item.image}" class="card-img-top" alt="...">
                                  <div class="card-body">
                                    <h5 class="card-title">${item.nameCategory}</h5>
                                    <h6 class="card-title">${item.status},${item.date}</h6>
                                     <h6 class="card-title">${item.username}</h6>
                                    <p class="card-text">${item.content}</p>
                                    <a href="#" class="btn btn-primary" onclick="remove(${item.id})">Delete</a>
                                    <a href="#" class="btn btn-primary" onclick="showFormEdit(${item.id})">Edit</a>

                                  </div>
                                </div>`
                })
                html += `</div>`
                $('#tbody').html(html)
            }


        })

    }

}

function userManager() {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        // console.log(token.role)
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/auth',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (users) => {
                // console.log(users);

                let html = '<table class="table table-success table-striped">';
                users.map(item => {

                    html += `

  <thead>
    <tr>
      <th scope="col">${item.id}</th>
      <th scope="col">${item.username}</th>
      <th scope="col">${item.role}</th>
     <td><button onclick="lock(${item.id})" class="btn btn-success">${item.status}</button></td>
            <td><button onclick="deleteRemove(${item.id})" class="btn btn-danger">Delete</button></td>
    </tr>
  </thead>
  
`
                })
                html += `</table>`
                $('#tbody').html(html)
            }
        })
    }
}

function lock(id) {
    if (confirm('lock ?')) {
        let token = localStorage.getItem('token')
        if (token) {
            token = JSON.parse(token)
            $.ajax({
                type: 'PUT',
                url: `http://localhost:3000/auth/lock/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.token
                },
                success: () => {
                    userManager();
                }
            })
        }
    }

}

function add() {
    let token = localStorage.getItem('token')
    // console.log(token)
    if (token) {
        token = JSON.parse(token)
        let content = $('#content').val();
        let status = $('#status').val();
        let image = localStorage.getItem('image')
        let date = $('#date').val();
        let user = token.idUser;
        let category = $('#categoryAdd').val();
        let blog = {
            content: content,
            status: status,
            image: image,
            date: date,
            user: user
        }
        $.ajax({
            type: 'POST',
            url: 'http://localhost:3000/blogs',
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            data: JSON.stringify(blog),

            success: (newBlog) => {
                let idBlog = newBlog.id;
                let blogCategory = {
                    idBlog: idBlog,
                    idCategory: category
                }
                $.ajax({
                    type: 'POST',
                    url: 'http://localhost:3000/blogs/blogCategory',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + token.token
                    },
                    data: JSON.stringify(blogCategory),

                    success: (blogCategory) => {
                        console.log(blogCategory, 197)
                        showHome()
                    }
                })

            }
        })
    }
}

function remove(id) {
    if (confirm('You are sure?')) {
        let token = localStorage.getItem('token')
        if (token) {
            token = JSON.parse(token)
            $.ajax({
                type: 'DELETE',
                url: `http://localhost:3000/blogs/${id}`,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token.token
                },
                success: () => {
                    showHome();
                }
            })
        }
    }
}

function showFormEdit(id) {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/blogs/findById/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            success: (blogs) => {
                $('#body').html(`
 <div  style="display: flex; justify-content: center">
 <form style="width: 50%">
 <div> <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Content</label>
    <input type="text" class="form-control" id="content" aria-describedby="emailHelp" value="${blogs.content}" >
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Image</label>
    <input type="file" id="fileButton" onchange="uploadImage(event)">
             <div id="imgDiv"><img src="${blogs.image}" alt=""></div>
  </div>
  <button class="btn btn-primary" onclick="edit(${blogs.id})">Edit</button>
   </div>
</form>
</div>
 
`)
            }
        })

    }
}

function edit(id) {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        let content = $('#content').val();
        let image = localStorage.getItem('image')
        let blog = {
            content: content,
            image: image,
        }
        $.ajax({
            type: 'PUT',
            url: `http://localhost:3000/blogs/${id}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            data: JSON.stringify(blog),

            success: () => {
                showHome()
            }
        })
    }
}

function uploadImage(e) {
    let fbBucketName = 'images';
    let uploader = document.getElementById('uploader');
    let file = e.target.files[0];
    let storageRef = firebase.storage().ref(`${fbBucketName}/${file.name}`);
    let uploadTask = storageRef.put(file);
    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function (snapshot) {
            uploader.value = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    break;
                case firebase.storage.TaskState.RUNNING:
                    break;
            }
        }, function (error) {
            switch (error.code) {
                case 'storage/unauthorized':
                    break;
                case 'storage/canceled':
                    break;
                case 'storage/unknown':
                    break;
            }
        }, function () {
            let downloadURL = uploadTask.snapshot.downloadURL;
            document.getElementById('imgDiv').innerHTML = `<img src="${downloadURL}" alt="">`
            localStorage.setItem('image', downloadURL);
        });
}

function searchProduct(value) {
    let token = localStorage.getItem('token')
    if (token) {
        token = JSON.parse(token)
        let name = value.toLowerCase()
        console.log(name)
        $.ajax({
            type: 'GET',
            url: `http://localhost:3000/blogs/search/findByName?name=${name}`,
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token.token
            },
            data: JSON.stringify(name),
            success: (products) => {
                $("#body").html(`
  
  <table class="table" border="1">
  <thead>
    <tr>
      <td>ID</td>
            <td>Content</td>
            <td>Status</td>
            <td>Image</td>
            <td>Date</td>
            <td>Username</td>
            <td>Category</td>
            <td colspan="2">Action</td>
    </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
</table>
    `)
                let html = ''
                products.map(item => {
                    html += `<tr>
            <td>${item.id}</td>
            <td>${item.content}</td>
            <td>${item.status}</td>
            <td><img style="height: 200px;width: 200px" src="${item.image}" alt=""></td>
            <td>${item.date}</td>
            <td>${item.username}</td>
            <td>${item.nameCategory}</td>
            <td><button onclick="remove(${item.id})">Delete</button></td>
            <td><button onclick="showFormEdit(${item.id})">Edit</button></td>                  
                         </tr>`
                })
                $("#tbody").html(html)
            }
        })
    }
}

function showFormLogin() {
    $('#body').html(` 
 <div class="login-box">
  <h2>Login</h2>
  <form>
    <div class="user-box">
      <input id="username" type="text" name="" required="">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input id="password" type="password" name="" required="">
      <label>Password</label>
    </div>
    <a href="#" onclick="login()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
    <a href="#" onclick="showFormRegister()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Register
     
    </a>
    
  </form>
</div>
<link rel="stylesheet" href="../BE/public/blog.css">
            
`)
}

function login() {
    let username = $('#username').val();
    let password = $('#password').val();

    let user = {
        username: username,
        password: password
    }
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/auth/login`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),

        success: (token) => {
            if (token === "Username is not existed" || token === 'Password is wrong') {
                alert('Can not')
                showNav();
            } else {
                localStorage.setItem('token', JSON.stringify(token));
                showNav();
                showHome();
            }


        }
    })
}

function logout() {
    localStorage.clear();
    showFormLogin();
    showNav();
}

function showFormRegister() {
    $('#body').html(` 
 <div class="login-box">
  <h2>Register</h2>
  <form>
    <div class="user-box">
      <input id="username" type="text" name="" required="">
      <label>Username</label>
    </div>
    <div class="user-box">
      <input id="password" type="password" name="" required="">
      <label>Password</label>
    </div>
    <a href="#" onclick="signup()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Register
    </a>
    <a href="#" onclick="showFormLogin()">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
    </a>
  </form>
</div>
<link rel="stylesheet" href="../BE/public/blog.css">
            
`)
}

function signup() {
    let username = $('#username').val();
    let password = $('#password').val();

    let user = {
        username: username,
        password: password
    }
    $.ajax({
        type: 'POST',
        url: `http://localhost:3000/auth/signup`,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(user),

        success: (user) => {
            if (user === 'Username registered') {
                alert('Username registered')
            } else {
                showFormLogin()
            }

        }
    })
}