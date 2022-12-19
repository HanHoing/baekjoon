import java.util.ArrayList;

public class Main {
	public static void main(String[] args) {
	
ArrayList<Integer> selfNumArray = new ArrayList<Integer>();
ArrayList<Integer> numArray;

for(int i=1; i<=10000; i++) {
    numArray = new ArrayList<Integer>();
    int tmp = i;
    while(tmp > 0) {
        numArray.add(0, tmp%10);
        tmp = (tmp-tmp%10)/10;
    }
    int selfNum = i;
    for(int j=0; j<numArray.size(); j++){
        selfNum += numArray.get(j);
    }
    selfNumArray.add(selfNum);
}

for(int i=1; i<=10000; i++) { 
    if(selfNumArray.indexOf(i)==-1)System.out.println(i);
}

}
}