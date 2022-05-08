const express=require('express');
const router=express.Router();
router.get('/',(req,res)=>
{
    res.sendFile(__dirname+"/expressform.html");
});
router.get('/youtube',(req,res)=>
{
    res.redirect('https://www.youtube.com/user/SonyMusicSouthVEVO');
});
module.exports=router;