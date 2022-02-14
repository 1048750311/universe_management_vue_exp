<template>
<ul>
    <!-- query的接受设置 -->
    <!-- <li>消息编号:{{$route.query.id}}</li>
    <li>消息标题:{{$route.query.title}}</li> -->
    <!-- params的接受设置 -->
    <li>消息编号:{{$route.params.id}}</li>
    <li>消息标题:{{$route.params.title}}</li>
    <li>a:{{id}}</li>
    <li>b:{{title}}</li>
</ul>

</template>
<script>
export default {
    name:'Detail',
    // props:['a','b'],
    props:['id','title'],


}
</script>