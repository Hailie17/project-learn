/* 路由懒加载中动态导入组件的JS，在导入加载之前的Loading效果 */
import { Spin } from 'antd';
import styled from 'styled-components';

/* 组件样式 */
const StyledLoadingBox = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.3);
    
    .ant-spin{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
`;

export default () => {
    return <StyledLoadingBox>
        <Spin size="large" tip="加载中..." />
    </StyledLoadingBox>;
};