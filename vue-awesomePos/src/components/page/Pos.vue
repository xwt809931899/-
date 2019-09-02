<template>
  <div class="pos">
    <div>
      <el-row>
        <el-col :span="7" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐" style="text-align:center">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="totalPrice" label="金额" width="70"></el-table-column>
                <el-table-column label="操作" width="100" fixed="right">
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="removeOrderList(scope.row)">删除</el-button>
                    <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
              <el-button type="danger" @click="removeAllOrder(tableData)">删除</el-button>
              <el-button type="success" @click="getResult">结账</el-button>
              <div class="result" v-if="isResult">
                <div class="good" v-for="(good,index) in tableData" :key="index">
                  <div class="name">{{good.goodsName}}</div>
                  <div class="line">------------------</div>
                  <div class="num">{{good.count}}份</div>
                </div>
                <div class="money">
                  总共消费了
                  <span>{{totalMoney}}</span>元，祝您用餐愉快
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="挂单" style="text-align:center" name="panding">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="商品"></el-table-column>
                <el-table-column prop="count" label="量" width="50"></el-table-column>
                <el-table-column prop="totalPrice" label="金额" width="70"></el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="外卖" style="text-align:center">外卖</el-tab-pane>
          </el-tabs>
        </el-col>
        <!--商品展示-->
        <el-col :span="17">
          <div class="often-goods" style="background:#ffffff">
            <div class="title">常用商品</div>
            <div class="often-goods-list">
              <ul style="overflow:hidden;margin-top:16px;margin-bottom:0">
                <li v-for="(good,index) in oftenGoods" :key="index">
                  <span>{{good.goodsName}}</span>
                  <span class="o-price">￥{{good.price}}</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <ul class="cookList">
                  <li v-for="(item,index) in type0Goods" :key="index" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" style="width:100%;height:100px" />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">{{item.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="小食">
                <ul class="cookList">
                  <li v-for="(item,index) in type1Goods" :key="index" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" style="width:100%;height:100px" />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">{{item.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="饮料">
                <ul class="cookList">
                  <li v-for="(item,index) in type2Goods" :key="index" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" style="width:100%" />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">{{item.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="套餐">
                <ul class="cookList">
                  <li v-for="(item,index) in type3Goods" :key="index" @click="addOrderList(item)">
                    <span class="foodImg">
                      <img :src="item.goodsImg" style="width:100%;height:100px" />
                    </span>
                    <span class="foodName">{{item.goodsName}}</span>
                    <span class="foodPrice">{{item.price}}</span>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Pos",
  data() {
    return {
      tableData: [],
      oftenGoods: [],
      type0Goods: [],
      type1Goods: [],
      type2Goods: [],
      type3Goods: [],
      isResult: false,
      totalMoney: 0
    };
  },
  mounted() {
    var orderHeight = document.body.clientHeight;
    document.getElementById("order-list").style.height = orderHeight + "px";
  },
  created() {
    axios
      .get(
        "https://www.easy-mock.com/mock/5ca458094767c3737055c8f8/example/vue-pos-oftenGoods"
      )
      .then(response => {
        console.log(response);
        this.oftenGoods = response.data.data;
      })
      .catch(err => {
        console.log(err);
        alert("网络错误，不能访问");
      });
    axios
      .get(
        "https://www.easy-mock.com/mock/5ca458094767c3737055c8f8/example/vue-pos-typeGoods"
      )
      .then(response => {
        console.log(response);
        this.type0Goods = response.data.data[0];
        this.type1Goods = response.data.data[1];
        this.type2Goods = response.data.data[2];
        this.type3Goods = response.data.data[3];
      })
      .catch(error => {
        console.log(error);
        alert("网络错误，不能访问");
      });
  },
  methods: {
    addOrderList(item) {
      this.totalCount = 0;
      this.totalMoney = 0;
      let isHave = false;
      //判断是否这个商品已经存在于订单列表
      for (let i = 0; i < this.tableData.length; i++) {
        // console.log(this.tableData[i].goodsId);
        if (this.tableData[i].goodsId == item.goodsId) {
          isHave = true; //存在
        }
      }
      //根据isHave的值判断订单列表中是否已经有此商品
      if (isHave) {
        //存在就进行数量添加
        let arr = this.tableData.filter(o => o.goodsId == item.goodsId);
        // console.log(arr)
        arr[0].count++;
      } else {
        //不存在就推入数组
        let newGoods = {
          goodsId: item.goodsId,
          goodsName: item.goodsName,
          totalPrice: item.price,
          count: 1,
          price: item.price
        };
        this.tableData.push(newGoods);
        // console.log(this.tableData)
      }

      //计算总量和总价
      this.tableData.forEach(element => {
        this.totalCount += element.count;
        element.totalPrice = element.price * element.count;
        this.totalMoney += element.price * element.count;
        // console.log(element.count)
        // console.log(element.totalPrice)
      });
    },
    removeOrderList(item) {
      let obj = this.tableData.find(e => e.goodsId == item.goodsId);
      obj.count--;
      if (obj.count <= 0) {
        let index = this.tableData.indexOf(obj);
        this.tableData.splice(index, 1);
        return (obj.count = 0);
      }
      this.tableData.forEach(e => {
        e.totalPrice = e.price * e.count;
        this.totalMoney += element.price * element.count;
      });
    },
    removeAllOrder(tableData) {
      if (this.tableData.length === 0) return;
      this.tableData.splice(0);
      this.isResult = false
    },
    getResult() {
      if(this.tableData.length === 0) return
      this.isResult = true;
    }
  }
};
</script>

<style scoped>
#order-list {
  background: #ffffff;
}
.title {
  height: 20px;
  background-color: #f9fafc;
  padding: 10px;
}
.often-goods-list ul li {
  list-style: none;
  float: left;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
}
.o-price {
  color: #58b7ff;
}
.cookList li {
  list-style: none;
  width: 23%;
  border: 1px solid #e5e9f2;
  height: auot;
  overflow: hidden;
  background-color: #fff;
  padding: 2px;
  float: left;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cookList li span {
  display: block;
  float: left;
}
.foodImg {
  width: 40%;
}
.foodName {
  font-size: 18px;
  padding-left: 10px;
  color: brown;
}
.foodPrice {
  font-size: 16px;
  padding-left: 10px;
  padding-top: 10px;
}
.result {
  margin-top: 50px;
  padding: 20px;
  font-size: 0;
  background: #ffffff;
}
.result .good {
  margin-bottom: 20px;
  display: flex
}
.result .money {
  font-size: 20px;
  margin-bottom: 50px;
}
.result .money span {
  font-weight: bold;
}
.result .good .name {
  flex: 1;
  font-size: 20px;
}
.result .good .line {
  flex: 1;
  font-size: 20px;
}
.result .good .num {
  flex:1;
  font-size: 20px;
}
</style>
