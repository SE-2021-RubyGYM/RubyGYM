#include <iostream>
#include <algorithm>
#include <fstream>
#include <map>
using namespace std;

// neu nhu chuoi dau vao co dau cach " " thi phai chuyen thanh ki tu "_"
// void detect_space(std::string &root)
// {
//     int h = 0;
//     while (root[h] != '\0')
//     {
//         if (root[h] == ' ')
//             root[h] = '_';
//         h++;
//     }
// }

// ham nay se chuyen root thanh chuoi bwt(root) va tra ve index cua chuoi goc
int BasicBwt(string &root)
{
    int size = root.size();
    int index[size];
    for (int i = 0; i < size; i++)
        index[i] = i;
    sort(index,index+size,[root,size](int id1,int id2)
    {
        for(int i =0; i<size;i++)
        {
            if(root[(id1+i)%size]<root[(id2+i)%size])
                return true;
            else if(root[(id1+i)%size]>root[(id2+i)%size]) return false;
        }
        return true;
    });
    string temp;
    int id;
    for(int i=0;i<size;i++)
    {
        if(index[i]==0) id=i;
        temp+=root[(index[i]+size-1)%size];
    }
    root = temp;
    //delete[] index;
    return id;
}

// ham nay nhan dau vao la bwt(root) va index cua chuoi goc, tra ve chuoi goc root
auto InverseBasicBwt(string &root, int index)
{
    int size = root.size(); 
    map<char, int> tots,firstCol;
    int ranks[size];
    for (int i = 0; i < size; i++)
    {
        ranks[i] = tots[root[i]];
        tots[root[i]]++;
        
    }
    int totc = 0;
    for(auto &i:tots)
    {
        firstCol[i.first] = totc;
        totc+= i.second;
    }
    char * result = new char[size+1];
    result[size] = '\0';
    for(int i =size-1;i>=0;i--)
    {
        result[i] = root[index];
        index = firstCol[root[index]] + ranks[index];
    }
    return result;
    
    
}

// ham nay se chuan bi dau vao cho BasicBwt va thuc hien InverseBasicBwt
void Setup(){
    string temp;
    while(getline(cin,temp)){
        //detect_space(temp);
        cout << BasicBwt(temp);
        cout << endl << temp << endl;
    }
    fstream fileInput{"out.txt", ios::in};

    if (!fileInput.is_open())
    {
        cout << "Cannot open file at " << "out.txt" << endl;
        return;
    }
    fstream fileOutput{"out2.txt", ios::out};

    if (!fileOutput.is_open())
    {
        cout << "Cannot open file at " << "out2.txt" << endl;
        return;
    }
    string s_index;
    while (getline(fileInput,s_index))
    {
        int index = stoi(s_index);
        string stemp;
        getline(fileInput,stemp);
        fileOutput << InverseBasicBwt(stemp,index) << endl;
    }
    fileInput.close();
    fileOutput.close();
}


int main(){
    ifstream in("in.txt");
    ofstream out("out.txt");
    ios_base::sync_with_stdio(false);
    cin.tie(0);
    cin.rdbuf(in.rdbuf());
    cout.rdbuf(out.rdbuf()); 
    Setup();
   // system("pause");
    return 0;
}