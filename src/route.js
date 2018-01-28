import ShowBlogs from './components/ShowBlog'
import addBlogs from './components/AddBlog'
import singleBlog from './components/singleBlog'

export default[
  {path:'/',component:ShowBlogs},
  {path: '/add',component:addBlogs},
  {path: '/blog/:id',component:singleBlog}
]
