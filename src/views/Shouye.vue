<template>
        <div>
            <el-carousel :interval="5000" arrow="always">
                <el-carousel-item
                v-for="item in 4" :key="item"
                >
                <h3>{{item}}</h3>
                </el-carousel-item>
            </el-carousel>
            <div>
                <p 
                v-for="(item,index ) in list" :key="index"
                >{{item.text}}</p>
            </div>
        </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {
                    text:"成单奖励"
                },
                {
                    text:"拼单奖励"
                },
                {
                    text:"中单奖励"
                }
            ]
        }
    }
}
</script>

<style>

</style>