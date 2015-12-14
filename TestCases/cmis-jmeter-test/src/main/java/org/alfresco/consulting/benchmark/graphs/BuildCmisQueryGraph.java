package org.alfresco.consulting.benchmark.graphs;




import org.alfresco.consulting.benchmark.locator.PropertiesLocator;
import org.krysalis.jcharts.axisChart.AxisChart;
import org.krysalis.jcharts.axisChart.customRenderers.axisValue.renderers.ValueLabelPosition;
import org.krysalis.jcharts.axisChart.customRenderers.axisValue.renderers.ValueLabelRenderer;
import org.krysalis.jcharts.chartData.AxisChartDataSet;
import org.krysalis.jcharts.chartData.ChartDataException;
import org.krysalis.jcharts.chartData.DataSeries;
import org.krysalis.jcharts.chartData.interfaces.IAxisDataSeries;
import org.krysalis.jcharts.encoders.JPEGEncoder;
import org.krysalis.jcharts.properties.*;
import org.krysalis.jcharts.properties.util.ChartFont;
import org.krysalis.jcharts.types.ChartType;

import java.awt.*;
import java.io.*;
import java.util.Properties;
import org.apache.log4j.Logger;

public class BuildCmisQueryGraph {


    protected LegendProperties legendProperties;
    protected AxisProperties axisProperties;
    protected ChartProperties chartProperties;

    protected int width = 850;
    protected int height = 460;
    static FileReader freader = null;
    static FileReader freader2 = null;
    static File datafile = null;
    static LineNumberReader lnreader = null;
    static LineNumberReader lnreader2 = null;
    static int count = 0;
    private static final Logger LOG = Logger.getLogger(BuildFolderCreationGraph.class);
    private static Properties props = PropertiesLocator.getProperties("alfresco-consulting-tests.properties");
    private static String alfrescoRecordedTimesPath = props.getProperty("alfrescoRecordedTimesPath");
    private static String scaleConstantx = props.getProperty("scaleConstantX");
    private static String scaleConstanty = props.getProperty("scaleConstantY");
    private static String xAxisTitleProp = props.getProperty("xAxisTitle");
    private static String yAxisTitleProp = props.getProperty("yAxisTitle");
    private static String legendLabel = props.getProperty("legendLabel");


    public static void buid(String datafileName, String graphName)
    {
        datafile = new File(alfrescoRecordedTimesPath + "/" + datafileName);
        try {
            freader = new FileReader(datafile);
            freader2=new FileReader(datafile);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        if (datafile.exists()){
            try {
                FileReader fr = new FileReader(datafile);
                LineNumberReader ln = new LineNumberReader(fr);
                while (ln.readLine() != null){
                    count++;
                }
                System.out.println("Total line no: " + count);
                ln.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        lnreader = new LineNumberReader(freader);
        lnreader2 = new LineNumberReader(freader2);
        LegendProperties legendProperties = new LegendProperties();
        ChartProperties chartProperties = new ChartProperties();
        AxisProperties axisProperties = new AxisProperties( false );
        ChartFont axisScaleFont = new ChartFont( new Font( "Georgia Negreta cursiva", Font.PLAIN, 8 ), Color.black );
        axisProperties.getXAxisProperties().setScaleChartFont(axisScaleFont);
        axisProperties.getYAxisProperties().setScaleChartFont(axisScaleFont);
        ChartFont axisTitleFont = new ChartFont( new Font( "Arial Narrow", Font.PLAIN, 8 ), Color.black );
        axisProperties.getXAxisProperties().setTitleChartFont( axisTitleFont );
        axisProperties.getYAxisProperties().setTitleChartFont( axisTitleFont );
        DataAxisProperties dataAxisProperties = (DataAxisProperties) axisProperties.getYAxisProperties();

        try
        {
            dataAxisProperties.setUserDefinedScale(Integer.parseInt(scaleConstantx),Integer.parseInt(scaleConstanty) );
        }
        catch( PropertyException propertyException )
        {
            propertyException.printStackTrace();
        }

        ChartFont titleFont = new ChartFont( new Font( "Georgia Negreta cursiva", Font.PLAIN, 14 ), Color.black );
        chartProperties.setTitleFont( titleFont );
        BarChartProperties barChartProperties = new BarChartProperties();
        ValueLabelRenderer valueLabelRenderer = new ValueLabelRenderer( false, false, true, -1 );
        valueLabelRenderer.setValueLabelPosition( ValueLabelPosition.ON_TOP );
        valueLabelRenderer.useVerticalLabels( false );
        barChartProperties.addPostRenderEventListener( valueLabelRenderer );
        Stroke[] strokes = {LineChartProperties.DEFAULT_LINE_STROKE};
        Shape[] shapes = {PointChartProperties.SHAPE_DIAMOND};
        LineChartProperties lineChartProperties = new LineChartProperties( strokes, shapes );


        String lineContent = "";
        String xAxisTitle = xAxisTitleProp;
        String yAxisTitle = yAxisTitleProp;
        String title = graphName;


        String[] xAxisLabels = new String[count];
        int lines = 0;
        try {
            while ((lineContent = lnreader.readLine()) != null){
                System.out.println("Content 1 " + lineContent);
                String  splitis = lineContent.substring(11,19);
                xAxisLabels[lnreader.getLineNumber()-1]=splitis;
            }
            System.out.println("Tamanho dos xAxisLabels " + xAxisLabels.length);
        } catch (IOException e) {
            e.printStackTrace();
        }

        IAxisDataSeries dataSeries = new DataSeries( xAxisLabels, xAxisTitle, yAxisTitle, title );

        double [] doubleArray = new double[count];
        try {
            while ((lineContent = lnreader2.readLine()) != null){
                String  splitis = lineContent.substring(20);
                System.out.println("Content 2 "+ lineContent);
                doubleArray[lnreader2.getLineNumber()-1] = new Double(splitis).doubleValue();

            }

        } catch (IOException e) {
            e.printStackTrace();
        }
        double[][] data = new double[][]{doubleArray};
        String[] legendLabels = {legendLabel};
        Paint[] paints = new Paint[]{Color.yellow};
        Paint[] linePaints = new Paint[]{Color.green};
        try {
            dataSeries.addIAxisPlotDataSet( new AxisChartDataSet( data, legendLabels, paints, ChartType.BAR, barChartProperties ) );
            dataSeries.addIAxisPlotDataSet( new AxisChartDataSet( data, legendLabels, linePaints, ChartType.LINE, lineChartProperties ) );

        } catch (ChartDataException e) {
            e.printStackTrace();
        }

        AxisChart axisChart = new AxisChart( dataSeries, chartProperties, axisProperties, legendProperties, 1024, 768);
        File outJpg =  new File(alfrescoRecordedTimesPath + "/" + graphName);
        OutputStream out = null;
        try {
            out = new FileOutputStream(outJpg);
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }
        try {
            JPEGEncoder.encode(axisChart,1.0f, out );
        } catch (ChartDataException e) {
            e.printStackTrace();
        } catch (PropertyException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }


    public static void main(String[] args) {
        BuildFolderCreationGraph my = new BuildFolderCreationGraph();
        my.buid("folder_cmis_query_times.txt", "cmisCheckinTimes.jpg");
        my = null;
    }
}

