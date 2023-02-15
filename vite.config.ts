import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {NaiveUiResolver} from 'unplugin-vue-components/resolvers'
import {resolve}from 'path'

function pathResolve(dir:string){

    return resolve(process.cwd(),'.',dir)
}

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [NaiveUiResolver()]
        })
    ],
    resolve:{
        alias:[
            {
                // 简化路径前缀，使用绝对定位
                find:'@',
                replacement:(pathResolve('src'))
            }
        ]
    }
})