import { _decorator, Component } from 'cc';
const { ccclass } = _decorator;

@ccclass('AutoTasks')
export class AutoTasks extends Comment {
    public static instance: AutoTasks

    onload() {
        AutoTasks.instance = this
    }

}