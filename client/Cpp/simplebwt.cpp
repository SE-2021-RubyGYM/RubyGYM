#include <iostream>
#include <algorithm>
#include <fstream>
#include <vector>
#include <bitset>
#include <sstream>
using namespace std;
// const int STX = 0002;
// const int ETX = 0003;
// std::string makePrintable(std::string &s)
// {
//     // auto ls = s;
//     for (auto &c : s)
//     {
//         if (c == STX)
//         {
//             c = '^';
//         }
//         else if (c == ETX)
//         {
//             c = '|';
//         }
//     }
//     return s;
// }
struct node
{
    char *p;
    int index;
};
bool detect_space(std::string &root)
{
    int h = 0;
    while (root[h] != '\0')
    {
        if (root[h] != ' ')
            return false;
        h++;
    }
    return true;
}
void bwt(std::string &root)
{
    if (detect_space(root))
        return;
    size_t n = root.length();
    node *k = new node[n];
    for (int i = 0; i < n; i++)
    {
        k[i].p = &root[i];
        k[i].index = i;
    }
    std::sort(k, k + n, [root, n](const node &node1, const node &node2)
              { for (int i = 0; i < n; i++)
    {
        if (root[(node1.index + i) % n] < root[(node2.index + i) % n])
            return true;
        else if (root[(node1.index + i) % n] > root[(node2.index + i) % n])
            return false;
    }
    return true; });
    std::string temp;
    for (int i = 0; i < n; i++)
    {
        temp += root[(k[i].index + n - 1) % n];
        // std::cout<<root[(k[i].index + n - 1) % n];
    }
    root = temp;
    delete[] k;
}
void fileprc(std::string inputfile, std::string outputfile)
{
    std::fstream fileinput{inputfile, std::ios::in};
    if (!fileinput.is_open())
    {
        std::cout << "Failed to open this file!" << std::endl;
        system("pause");
    }
    std::fstream fileOutput{outputfile, std::ios::out};

    if (!fileOutput.is_open())
    {
        std::cout << "Cannot open file at " << outputfile << std::endl;
        return;
    }
    while (!fileinput.eof())
    {
        std::string temp;
        getline(fileinput, temp);
        // std::stringstream sstream(temp);
        // std::string output;
        // while (sstream.good())
        // {
        //     std::bitset<8> bits;
        //     sstream >> bits;
        //     char c = char(bits.to_ulong());
        //     output += c;
        // }
        bwt(temp);
        fileOutput << temp << std::endl;
    }
    fileinput.close();
    fileOutput.close();
}
int main()
{
    fileprc("E:\\projectI\\implement\\input1.txt", "E:\\projectI\\implement\\output1.txt");
    // std::string s = "";
    // s += STX;
    // s += "abc";
    // s += ETX;
    // bwt(s);
    // makePrintable(s)
    system("pause");
    return 0;
}
