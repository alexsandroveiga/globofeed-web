import styled from 'styled-components';

export const Container = styled.div`
  /*&:after {
    width: 100%;
    height: 100%;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.95);
  }*/
`;

export const Form = styled.div`
  margin: 0 16px 16px 16px;

  @media screen and (min-width: 74em) {
    width: 1100px;
    margin: 0 auto;
  }

  input {
    border: 1px solid #ccc;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

export const Categories = styled.div`
  display: flex;
  margin: 0 1rem 16px 1rem;
  justify-content: space-between;

  @media screen and (min-width: 74em) {
    width: 1100px;
    margin: 0 auto 1rem auto;
    justify-content: center;

    button {
      margin: 0 1rem;
    }
  }

  button {
    background: #0669de;
    border: 0;
    color: #fff;
    padding: 4px;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 12px;
    font-weight: bold;
  }
`;

export const PostList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  @media screen and (min-width: 74em) {
    width: 1100px;
    margin: 0 auto;
  }

  > div {
    background: #fff;
    margin: 0 16px 16px 16px;
    display: flex;
    flex-flow: row wrap;
    width: 100%;
    min-height: 180px;

    @media screen and (min-width: 74em) {
      width: calc(33.3333333333% - 0.66666666666rem);
      margin: 0 0 16px 0;
    }

    .thumbnail {
      width: 40%;
      overflow: hidden;
      margin: 0;
      position: relative;
      height: 100%;
    }

    .thumbnail img {
      width: auto;
      height: 100%;
      display: block;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 0;
    }

    .content {
      width: 60%;
      background: #eee;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .title {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 16px;

        h1 {
          font-size: 14px;
        }

        span {
          display: block;
          width: 100%;
          font-weight: 600;
          font-size: 8px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
      }

      .categories {
        background: #ddd;
        padding: 8px 16px;
        display: flex;
        flex-flow: row wrap;

        span {
          background: #0669de;
          color: #fff;
          padding: 4px;
          font-size: 8px;
          text-transform: uppercase;
          font-weight: bold;
          border-radius: 4px;
          margin-right: 4px;
          display: inline-block;
        }
      }
    }
  }
`;
