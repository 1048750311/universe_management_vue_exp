<template>
    
<div>
    <h2>Home组件内容</h2>
    <div>
        <ul class="nav nav-tabs">
            <li>
            <router-link replace class="list-group-item " active-class="active" to="/home/News">News</router-link>
            </li>
            <li>
            <router-link replace class="list-group-item " active-class="active" to="/home/message">Message</router-link>
            </li>
        </ul>
        <!-- 保持活跃，防止切换自动销毁 -->
        <keep-alive include="News">
        <router-view></router-view>
        </keep-alive>
    </div>
</div> 

</template>
<script>
export default {
  name: "Home"
};
</script>
<style lang="css" scoped>
</style>
