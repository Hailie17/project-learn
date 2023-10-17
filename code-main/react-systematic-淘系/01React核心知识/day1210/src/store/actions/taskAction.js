import * as TYPES from '../action-types';
import { getTaskList } from '@/api';

const taskAction = {
    // 异步派发：从服务器获取全局任务，同步到redux容器中
    async queryAllList() {
        let list = [];
        try {
            let result = await getTaskList(0);
            if (+result.code === 0) {
                list = result.list;
            }
        } catch (_) { }
        return {
            type: TYPES.TASK_LIST,
            list
        };
    },
    // 同步派发：删除执行任务
    deleteTaskById(id) {
        return {
            type: TYPES.TASK_REMOVE,
            id
        };
    },
    // 同步派发：修改任务
    updateTaskById(id) {
        return {
            type: TYPES.TASK_UPDATE,
            id
        };
    }
};
export default taskAction;