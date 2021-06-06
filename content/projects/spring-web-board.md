---
author:
  name: "Emma Kang"
date: 2020-05-06
linktitle: Spring Web Board
title: "[Personal] Spring Web Board"
type:
- post
- posts
weight: 10
series:
- personal project
aliases:
- /projects/spring-web-board
---

This is personal project for Web board with Spring framework. Users can create/read/update/delete posting on the board. Basically, the web board built with Spring MVC and Thymeleaf template view engine. 

### Tech Stack 

- Java Spring MVC
- MySQL, Hibernate
- Thymeleaf 

``` java
@Controller
public class WritePostController {
    private PostDTO postDTO;
    private PostService postService;
    private UserService userService;

    @Autowired
    public void setUserService(@Qualifier("userService") UserService us) { 
      this.userService = us; 
    }

    @Autowired
    public void setPostService(@Qualifier("postService") PostService ps) { 
      this.postService = ps; 
    }

    @RequestMapping(value = "/writepost", method = RequestMethod.GET)
    public String writePostPage(Model model) {
        model.addAttribute("postDTO", new PostDTO());
        return "thymeleaf/writePost";
    }

    @RequestMapping(value = "/writepost", method = RequestMethod.POST)
    public String writeNewPost(@ModelAttribute final PostDTO postDTO
                               , final BindingResult bindingResult, final ModelMap model) {
      
        this.postDTO = postDTO;
        Integer userid = getUserIdByName(postDTO.getUsername(), postDTO.getPasswords());

        if(userid == null) {
            userid = createNewUsers(postDTO.getUsername(), postDTO.getPasswords());
        }

        if (bindingResult.hasErrors() || postDTO.getErrMsg() != null) {
            model.addAttribute("errorMsg", postDTO.getErrMsg());
            return "thymeleaf/writePost";
        }

        createNewPost(userid);

        model.clear();
        return "redirect:/";
    }

    private void createNewPost(Integer userid) {
        Posts post = new Posts();

        post.setUserid(userid);
        post.setTitle(postDTO.getTitle());
        post.setBody(postDTO.getPostbody());
        post.setPostingDate(Calendar.getInstance().getTime());

        this.postService.addPost(post);
    }

    private Integer createNewUsers(String username, String passwords) {
        Users newUser = new Users();
        newUser.setUsername(username);
        newUser.setPasswords(passwords);
        newUser.setCreatedate(Calendar.getInstance().getTime());
        this.userService.addUser(newUser);

        return newUser.getUserid();
    }

    private Integer getUserIdByName(String username, String password) {
        Users existUser = this.userService.getUserByName(username);
        Integer userId = null;

        if (existUser != null) {
            if (!existUser.getPasswords().equals(password)){
                postDTO.setErrMsg("Password not match with stored data");
            }
        }

        return userId;
    }
```

For more details, please review [Github](https://github.com/emma-kang/spring-web-board)



